import firebase from 'firebase/app'
import "firebase/auth"

if (!firebase.apps.length){
  firebase.initializeApp({
    apiKey: "AIzaSyDXD7nqZqowG_qjRo5Y2_oJFvC8yO_ccbk",
    authDomain: "nugo-71fe0.firebaseapp.com",
    databaseURL: "https://nugo-71fe0.firebaseio.com",
    projectId: "nugo-71fe0",
    storageBucket: "nugo-71fe0.appspot.com",
    messagingSenderId: "681711262787",
    appId: "1:681711262787:web:5dc604e0093f2fd228c8f6"
  })
}

export default firebase;