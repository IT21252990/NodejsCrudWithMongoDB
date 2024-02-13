import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/employeeRoute";

const app = express();

app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000 ;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
    })
}).catch(err=> console.log(err));

app.use("/api/employee", route);