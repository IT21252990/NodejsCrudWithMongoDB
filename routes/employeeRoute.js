const express = require("express");
const EmployeeController = require("../controller/employeeController")

const route = express.Router();

const authenticate = require("../middleware/authenticate");

route.post("/create",authenticate, EmployeeController.create);
route.get("/getallemployees",authenticate, EmployeeController.fetch);
route.put("/update/:id",authenticate, EmployeeController.update);
route.delete("/delete/:id",authenticate, EmployeeController.deleteEmployee);

module.exports = route;
