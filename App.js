import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import UserEndpoint from "./endpoint/UserEndpoint.js";
/**
 * Initialization
 */
dotenv.config();
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    console.log("accessing root")
    res.send("HELLO")
})

new UserEndpoint(app);

app.listen(3000 , () => {
    console.log(`App listening on the port ${process.env.IRIS_APP_PORT}`)
})

/*
const db = Database.getDatabase();

const ref = firestore.doc(db, process.env.IRIS_FIRESTORE_DATABASE, User.dbName).withConverter(User.converter);
firestore.setDoc(ref, new User("firstname0", "lastname0", "firstname@domain.ext", "0123456789", "99", "male")).then(res => {
    console.log(res);
})
*/