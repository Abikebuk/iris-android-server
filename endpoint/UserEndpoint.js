import {request, response} from "express";
import * as firestore from "firebase/firestore";
import User from "../database/Schema/User.js";

export default class UserEndpoint{
    constructor(app) {
        this.root = "/users";
        this.app = app;
        this.ref = firestore.collection(User.dbName);

        this.create();
    }

    create() {
        this.app.get(`${this.root}/get`, (request, response) => {
            const firstname = request.query.firstname;
            const lastname = request.query.lastname;
            const mail = request.query.mail;
            const phone = request.query.phone;
            const age = request.query.age;
            const gender = request.query.gender;
            const userToCreate = new User(firstname, lastname, mail, phone, age, gender)
            console.log("Creating user : ")
            console.log(userToCreate.toString());
            const mailQuery = firestore.query(this.ref, firestore.where("mail", "==", mail));
            console.log(mailQuery);
        })
    }
}