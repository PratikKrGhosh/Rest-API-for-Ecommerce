import mongoose from "mongoose";
import config from "./env.config.js";

const db_uri = config.db.uri || "database url";

export const db = async () => {
    await mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to Database");
    }).catch(() => {
        console.log("Couldn't connect to the Database")
    });
}