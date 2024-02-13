const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
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
    password: {
        type: String,
        required: true
    }
});

const Manager = mongoose.model('managers', managerSchema);

module.exports = Manager;