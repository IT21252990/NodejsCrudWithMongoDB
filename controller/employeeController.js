const Employee = require("../model/employeeModel");

const create = async(req, res)=>{
    try {
        const employeeData = new Employee( req.body);
        const {email} = employeeData;
        const employeeExist = await Employee.findOne({email})
        if (employeeExist){
            return res.status(400).json({message : "Employee already exist."})
        }
        const savedEmployee = await employeeData.save();
        res.status(200).json(savedEmployee)
    } catch (error) {
        res.status(500).json({error : "Internal Server Error. "})
    }
}

const fetch = async (req, res)=>{
    try {
        const employees = await Employee.find();
        if(employees.length === 0 ){
            return res.status(404).json({message : "Employees not Found."})
        }
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

const update = async (req, res)=>{
    try {
        const id = req.params.id;
        const employeeExist = await Employee.findOne({_id:id})
        if (!employeeExist){
            return res.status(404).json({message : "Employee not found."})
        }
        const updateEmployee = await Employee.findByIdAndUpdate(id, req.body, {new : true});
        res.status(201).json(updateEmployee);
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}

const deleteEmployee = async (req, res)=>{
    try {
        const id = req.params.id;
        const employeeExist = await Employee.findOne({_id:id})
        if(!employeeExist){
            return res.status(404).json({message : " Employee Not Found. "})
        }
        await Employee.findByIdAndDelete(id);
        res.status(201).json({message : " Employee deleted Successfully."})
    } catch (error) {
        res.status(500).json({error : " Internal Server Error. "})
    }
}   

module.exports = {
    create,
    fetch,
    update,
    deleteEmployee
}