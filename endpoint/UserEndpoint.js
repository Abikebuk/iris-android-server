import * as firestore from "firebase/firestore";
import User from "../database/Schema/User.js";
import Database from "../database/Database.js";
import Error from "../api/Error.js";

export default class UserEndpoint{
    constructor(app) {
        this.root = "/users";
        this.app = app;
        this.db = Database.getDatabase();
        this.collection = firestore.collection(Database.getDatabase(), User.dbName);

        this.create();
    }

    create() {
        this.app.post(`${this.root}/create`, (request, response) => {
            const firstname = request.query.firstname;
            const lastname = request.query.lastname;
            const mail = request.query.mail;
            const phone = request.query.phone;
            const age = request.query.age;
            const gender = request.query.gender;
            const password = request.query.password;

            const userToCreate = new User(firstname, lastname, mail, phone, age, gender, password)
            firestore.getDoc(firestore.doc(this.db, User.dbName, mail)).then(r => {
                console.log(r.data());
                if (r.data() === undefined) { //  <==>  if user doesn't already exist
                    console.log("Creating user : ")
                    console.log(userToCreate.toString());
                    firestore.setDoc(
                        firestore.doc(this.db, User.dbName, mail).withConverter(User.converter), userToCreate)
                        .then(r => {
                            console.log(r)
                            userToCreate.password = undefined; // hide password on response
                            response.send(new Error(201, "User successfully created", userToCreate));
                        })
                }else {
                    response.send(new Error(304, "This e-mail already is in use"));
                }
            })

        })
    }
}