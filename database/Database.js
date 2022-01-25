import * as firestore from "firebase/firestore";
import {initializeApp}  from "firebase/app";

export default class Database{
    static isInitialized = false;
    static database;

    static initDatabase(){
        initializeApp({
            apiKey: process.env.IRIS_FIREBASE_API_KEY,
            authDomain: process.env.IRIS_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.IRIS_FIRESTORE_PROJECT_ID
        });
        Database.database = firestore.getFirestore();
    }

    static getDatabase(){
        if(this.isInitialized === false){
            this.isInitialized = true;
            Database.initDatabase();
            return Database.database;
        }else {
            return Database.database;
        }
    }
}

