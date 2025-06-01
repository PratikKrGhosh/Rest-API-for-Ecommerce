// impoerting all files and libraries
import express, { urlencoded } from "express";
import config from "./config/env.config.js";
import { db } from "./config/db.config.js";
import productsRoute from "./route/products.route.js";

// Creating all constants
const app = express();
const port = config.port || 3000;

// all middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();
app.use("/api/products", productsRoute);

// listening to the app
app.listen(port, ()=>{console.log(`App is running at Port: ${port}`)});