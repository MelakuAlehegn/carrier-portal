const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: [true, 'please add email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add password']
    },
    role: {
        type: String,
        enum: ['candidate', 'employee', 'admin', 'superadmin'],
        default: 'candidate'
    },
    status:{
        type: String,
    },
    phone_number:{
        type: Number,
    },
    photo:{
        type: String,
    },
    attachments:{
        type: String,
    },
    department:{
        type: String,
    },
    bio:{
        type: String,
    },
    verified: {
        type: Boolean,
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)