import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDa7Z9LVH8b7RqPeHZwovnh8uwNKtn6fcE",
    authDomain: "sahajya-app.firebaseapp.com",
    databaseURL: "https://sahajya-app.firebaseio.com",
    projectId: "sahajya-app",
    storageBucket: "sahajya-app.appspot.com",
    messagingSenderId: "965553655527"
  };
  export const firebaseApp = firebase.initializeApp(config);
  export const coorD = firebase.firestore();