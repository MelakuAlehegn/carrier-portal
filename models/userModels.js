const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add Your name']
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
        enum: ['candidate', 'admin', 'superadmin'],
        default: 'candidate'
    },
    status:{
        type: String,
    },
    phone_number:{
        type: Number,
    }
},
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)