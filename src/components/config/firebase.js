import * as firebase from 'firebase'
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyATYdssiaji6mhrYRNHz7eyAc3cN7JSzZo",
    authDomain: "portfolio-3d16a.firebaseapp.com",
    databaseURL: "https://portfolio-3d16a.firebaseio.com",
    projectId: "portfolio-3d16a",
    storageBucket: "portfolio-3d16a.appspot.com",
    messagingSenderId: "917006233554",
    appId: "1:917006233554:web:fdb4f94cd2c3d52dbbe20b",
    measurementId: "G-PDMBFGD5SY"

  }
  firebase.initializeApp(config)
  database = firebase.database()
  console.log(database);
}