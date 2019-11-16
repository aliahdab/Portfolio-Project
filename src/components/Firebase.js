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


// dataRef.push({
//   'project_name': 'Portfolio',
//   'project_full_name': 'Portfolio_Foocafe_Class',
//   'project_description': ' I joined Click that was based in Damascus Syria and was responsible of Establishing and developing full IT projects, networking and infrastructure from initial conception to completion, as well of planning LAN and WAN networking projects, installing and configuring network infrastructure.',
//   'project_url': 'https://github.com/aliahdab/Portfolio-Project',
//   'project_date': '11/16/2019'
// });

// console.log('userId', userId);

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default dataRef;