import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Database from "./database/Database.js";
import User from "./database/Schema/User.js";
import * as firestore from "firebase/firestore";
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

const ref = firestore.doc(db, process.env.IRIS_FIRESTORE_DATABASE, User.dbName).withConverter(User.converter);
firestore.setDoc(ref, new User("firstname0", "lastname0", "firstname@domain.ext", "0123456789", "99", "male")).then(res => {
    console.log(res);
})

