import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDtn7znMJW-ve6DwTMAaMX8MRYzVi3x6OA",
    authDomain: "samer-18396.firebaseapp.com",
    databaseURL: "https://samer-18396.firebaseio.com",
    projectId: "samer-18396",
    storageBucket: "samer-18396.appspot.com",
    messagingSenderId: "823385578435",
    appId: "1:823385578435:web:25a1ce714ecf6803e8bb76",
    measurementId: "G-HV8RX2EBVR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataRef = database.ref('project_names');


export default dataRef;