const express = require('express');
const { create , fetch , update , deleteEmployee } = require('../controller/employeeController');

const route = express.Router();

route.post('/create', create);
route.get("/getallemployees" , fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteEmployee);

module.exports = route;