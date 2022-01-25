import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Database from "./database/database.js";
/**
 * Initialization
 */
dotenv.config();
const app = express();
app.use(cors);

app.get('/', (req, res) => {
    res.send("HELLO")
})

app.listen(process.env.IAS_APP_PORT, () => {
    console.log(`App listening on the port ${process.env.IAS_APP_PORT}`)
})

const db = Database.getDatabase();
