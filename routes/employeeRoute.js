import express from 'express';
import { create , fetch , update , deleteEmployee } from '../controller/employeeController';

const route = express.Router();

route.post('/create', create);
route.get("/getallemployees" , fetch);
route.put("/update/:id", update);
route.delete("delete/:id", deleteEmployee);

export default route;