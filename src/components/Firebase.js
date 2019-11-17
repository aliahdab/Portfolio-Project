import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyATYdssiaji6mhrYRNHz7eyAc3cN7JSzZo",
  authDomain: "portfolio-3d16a.firebaseapp.com",
  databaseURL: "https://portfolio-3d16a.firebaseio.com",
  projectId: "portfolio-3d16a",
  storageBucket: "portfolio-3d16a.appspot.com",
  messagingSenderId: "917006233554",
  appId: "1:917006233554:web:fdb4f94cd2c3d52dbbe20b",
  measurementId: "G-PDMBFGD5SY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataRef = database.ref('project_names');
console.log(database);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default dataRef;