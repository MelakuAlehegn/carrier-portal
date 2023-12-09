const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const path = require('path');
const User = require('../models/userModels')
const userVerification = require('../models/userVerification')
const storeTokenMiddleware =require('../controllers/storeToken')
const nodemailer = require('nodemailer')
const { v4: uuidv4 } = require('uuid')
const Joi = require('joi')

//nodemailer 
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'talentmmcy@gmail.com',
        pass: 'kflhtzqesoayessq'
    }
})

//test nodemailer 
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Ready for message")
        console.log(success)
    }
})

//@Desc     Register Users
//@route    Post api/users
//access    Public
const registerUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(209);
            throw new error('User already exists');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            email,
            password: hashedPassword,
            verified: false,
        });

        if (user) {
            // const token = generateToken(user._id);

            // sendVerificationEmail(user, res);
            // res.status(201).json({
            //     _id: user.id,
            //     email: user.email,
            //     token: token, // Use the generated token here
            //     status: "PENDING",
            //     message: "verification email sent"

            // });

            // // Set the token in localStorage
            // res.locals.token = token;
            // storeTokenMiddleware(req, res, next);
            try {
                const token = generateToken(user._id);
                await sendVerificationEmail(user); // Wait for email sending to finish
    
                res.status(201).json({
                    _id: user.id,
                    email: user.email,
                    token: token,
                    status: "PENDING",
                    message: "verification email sent"
                });
                
                // Set the token in localStorage
                res.locals.token = token;
                storeTokenMiddleware(req, res, next);
            } catch (error) {
                console.error('Error during registration:', error);
                res.status(500).json({
                    message: 'Internal Server Error',
                });
            }

        } else {
            res.status(400);
            throw new error('Invalid User Data');
        }
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

//@Desc     Verify email
//@route    get api/users/userid/uniqueString
//access    Public
const verifyEmail = asyncHandler(async (req, res) => {
    const { userId, uniqueString } = req.params;

    userVerification
        .find({ userId })
        .then((result) => {
            if (result.length > 0) {
                //user verification record exists so we proceed 
                const { expiresAt } = result[0]

                const hashedUniqueString = result[0].uniqueString
                //check if the code expires
                if (expiresAt < Date.now()) {
                    //record has expired
                    userVerification
                        .deleteOne({ userId })
                        .then(result => {
                            User
                                .deleteOne({ _id: userId })
                                .then(() => {
                                    res.json({
                                        message: "Link has expired. Please signup again",
                                    })
                                })
                                .catch((error) => {
                                    console.log(error)
                                    res.json({
                                        message: "Clearing user with expired unique string failed",
                                    })
                                })
                        })
                        .catch((error) => {
                            console.log(error)
                            res.json({
                                message: "An error occurred while clearing expired user verification record",
                            })
                        })
                } else {
                    //valid record exists so we validate the unique strings
                    //compare the unique strings
                    bcrypt
                        .compare(uniqueString, hashedUniqueString)
                        .then(result => {
                            if (result) {
                                //string matches 
                                User
                                    .updateOne({ _id: userId }, { verified: true })
                                    .then(() => {
                                        userVerification
                                            .deleteOne({ userId })
                                            .then(() => {
                                                res.redirect('/FormOne')
                                            })
                                            .catch((error) => {
                                                console.log(error)
                                                res.json({
                                                    message: "An error occurred while finalizing successful verification "
                                                })
                                            })
                                    })
                                    .catch((error) => {
                                        console.log(error)
                                        res.json({
                                            message: "An error occurred while updating user record to show verified"
                                        })
                                    })
                            } else {
                                //existing record but incorrect verification details
                                res.json({
                                    message: "Invalid verification details"
                                })
                            }
                        })
                        .catch((error) => {
                            console.log(error)
                            res.json({
                                message: "An error occurred while comparing unique strings."
                            })
                        })

                }
            } else {
                //user verification doesn't exist
                res.json({
                    message: "Account record doesn't exist or has been verified already. Please Signup or Login.",
                })
            }
        })
        .catch((error) => {
            console.log(error);
            res.json({
                message: "An error occurred while checking for existing user verification record",
            })
        })
})



//verified page route
const verifyPage = asyncHandler(async (req, res) => {
    res.sendFile(path.join(__dirname, "./../frontend/src/views/HomeView.vue"))
})



//@Desc     Authenticate Users
//@route    Post api/users
//access    Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //check for user email
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        if (user.verified) {
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                verified: user.verified,
                token: generateToken(user._id)
            })
        } else {
            res.json({
                _id: user.id,
                status: "FAILED",
                message: "Email hasn't been verified yet. Check your inbox!"
            })
        }
    } else {
        res.status(400)
        throw new Error('Invalid Credential')
    }
})
//@Desc     Get Users
//@route    Get api/users
//access    Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, name, email, role } = await User.findById(req.user.id)
    res.status(200).json({
        id: _id,
        name,
        email,
        role
    })
})
const getAllUser = asyncHandler(async (req, res) => {
    // Only allow superadmin to see all users
    if (req.user.role !== 'superadmin') {
        res.status(403);
        throw new Error('Access denied.');
    }
    const { page, limit, name, email, role, sortBy, sortOrder } = req.query;
    const query = userFilter({ name, email, role });
    const { pageNumber, pageSize, jump, totalUsers, totalPages } = await getPagination(page, limit, User, query);
    const sortOptions = userSortOptions(sortBy, sortOrder);
    const users = await User.find(query)
        .sort(sortOptions)
        .skip(jump)
        .limit(pageSize)
        .select('-password');
    res.status(200).json({
        currentPage: pageNumber,
        totalPages,
        totalUsers,
        users,
    });
});
const addAdmin = asyncHandler(async (req, res) => {
    const { name, email, password, role } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exist
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(209)
        throw new Error('User already Exist')
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})
const updateUser = asyncHandler(async (req, res) => {
    if (req.user.role !== 'superadmin') {
        res.status(403);
        throw new Error('Access denied.');
    }
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not Found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(updatedUser)
})
const deleteUser = asyncHandler(async (req, res) => {
    // Only allow superadmin and admin can Delet a job
    // if (req.user.role !== 'superadmin') {
    //     res.status(403);
    //     throw new Error('Access denied.');
    // }
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error(`can't get the User`)
    }
    await User.findByIdAndDelete(req.params.id, req.body, {
    })
    res.status(200).json({ id: req.params.id })
})
//Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// const transporter = nodemailer.createTransport({
//     // Your configuration options here
//     service: 'Gmail',
//     auth: {
//         user: process.env.AUTH_EMAIL,
//         pass: process.env.AUTH_PASS,
//     },
// });

//verfication email function
const sendVerificationEmail = async ({ _id, email }, res) => {
    //url to be used in email
    const currentUrl = "http://localhost:3000/api/"

    const uniqueString = uuidv4() + _id

    //mail options
    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Registration Confirmation",
        html: `<p>Hello</p> <p>Thank you for registering at MMCYTech Talent.</p> 
        <p><b>Please note</b> - you must complete this last step to become a registered member. Click the link below to activate your account.</P>
        <p>This link expires in 24 hours</P> <p>Press <a href=${currentUrl + "users/verify/" + _id + "/" + uniqueString + "?redirectUrl=http://localhost:5173/FormOne"}>here</a> to proceed.</p>`,
    };

    //hash  the unique string
    const saltrounds = 10;
    bcrypt
        .hash(uniqueString, saltrounds)
        .then((hashedUniqueString) => {
            //set values in userVerification collection
            const newVerification = new userVerification({
                userId: _id,
                uniqueString: hashedUniqueString,
                createdAt: Date.now(),
                expiresAt: Date.now() + 86400000,
            });

            newVerification
                .save()
                .then(() => {
                    transporter
                        .sendMail(mailOptions)
                        .then(() => {
                            //email sent and verification record saved
                            if (res) {
                            res.json({
                                status: "PENDING",
                                message: "Verification email sent",
                            })
                        }
                        })
                        .catch((error) => {
                            console.log(error);
                            if (res) {
                            res.json({
                                status: "FAILED",
                                message: "Couldn't send verification email!",
                            })
                        }
                        })
                })
                .catch((error) => {
                    console.log(error);
                    res.json({
                        status: "FAILED",
                        message: "Couldn't save verification email data!",
                    })
                })
        })
        .catch(() => {
            res.json({
                status: "FAILED",
                message: "An Error occurred while hashing email data",
            });
        })
}


module.exports = { registerUser, loginUser, getMe, getAllUser, updateUser, deleteUser, addAdmin, verifyEmail, verifyPage }