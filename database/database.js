import * as firestore from "firebase/firestore";
import {initializeApp}  from "firebase/app";

export default class Database{
    static database = null;
    static initDatabase(){
        initializeApp({
            apiKey: process.env.IRIS_FIREBASE_API_KEY,
            authDomain: process.env.IRIS_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.IRIS_FIRESTORE_PROJECT_ID
        });
        Database.database = firestore.getFirestore();
    }

    static getDatabase(){
        if(Database.database === null){
            Database.initDatabase();
            return Database.database;
        }else {
            return Database.database;
        }
    }
}

