const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    phoneno: {
        type: String,
        required: true,
    }

})


const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;

