const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institutionName: String,
    fieldOfStudy: String,
    educationalStatus: String,
    educationalPeriod: {
        startDate: Date,
        endDate: Date
    }
});

const experienceSchema = new mongoose.Schema({
    companyName: String,
    jobTitle: String,
    workTimeFrame: {
        startDate: Date,
        endDate: Date
    },
    reference: {
        phone: String,
        name: String,
        email: String,
        jobTitle: String
    },
    responsibility: String
});

const documentSchema = new mongoose.Schema({
    documentType: {
        type: String,
        enum: ['CV', 'Certificate', 'Endorsement', 'Degree']
    },
    document: String // Assuming a string to store file paths or references
});

const userSchema = mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        required: [true, 'Please add an email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    role: {
        type: String,
        enum: ['candidate', 'employee', 'admin', 'superadmin'],
        default: 'candidate'
    },
    status: String,
    phone_number: Number,
    department: String,
    bio: String,
    verified: Boolean,
    gender: {
        type: String,
        enum: ['Male', 'Female']
    },
    city: String,
    address: String,
    secondaryEmail: String,
    secondaryPhoneNumber: Number,
    linkedinURL: String,
    photo: String, // Assuming a string to store file paths or references
    skills: [String], // Assuming an array of strings for skills
    education: [educationSchema], // Array of education objects
    experience: [experienceSchema], // Array of experience objects
    documents: [documentSchema] // Array of document objects
},
{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
