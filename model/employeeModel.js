import mongoose from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
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

export default mongoose.model('employees', employeeSchema);