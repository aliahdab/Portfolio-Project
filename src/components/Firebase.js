import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const dataRef = database.ref('project_names');

// dataRef.push({
//     'project_name': 'Foo coding',
//     'project_description': 'Web development',
//     'project_url': 'https://github.com/Eid-Dauod/foo_coding_course'
// });

// dataRef.push({
//     'project_name': 'Portfolio',
//     'project_description': 'My Portfolio',
//     'project_url': 'https://github.com/Eid-Dauod/foo_coding_course'
// });




// console.log('userId', userId);

// function writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }

export default dataRef;