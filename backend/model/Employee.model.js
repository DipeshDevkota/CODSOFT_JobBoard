const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure the email is unique
        trim: true,
        lowercase: true,
    },
    phoneno: {
        type: String,
        required: true,
        unique: true,  // Ensure the phone number is unique
    },
    password: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }
});



const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
