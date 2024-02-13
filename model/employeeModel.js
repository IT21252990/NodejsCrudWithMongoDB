const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    experience:{
        type: Number,
        required: true
    }
});

const Employee = mongoose.model('employees', employeeSchema);

module.exports = Employee;