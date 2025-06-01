// impoerting all files and libraries
import express from "express";
import config from "./config/env.config.js";
import { db } from "./config/db.config.js";

// Creating all constants
const app = express();
const port = config.port || 3000;

// all middlewares
db();

// listening to the app
app.listen(port, ()=>{console.log(`App is running at Port: ${port}`)});