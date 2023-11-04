
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDhVUSovOWoehy0HpY4xkoX1jpnMGTXAj4",
    authDomain: "counter-42e58.firebaseapp.com",
    databaseURL: "https://counter-42e58-default-rtdb.firebaseio.com",
    projectId: "counter-42e58",
    storageBucket: "counter-42e58.appspot.com",
    messagingSenderId: "803524345038",
    appId: "1:803524345038:web:6f79d160a083446dbae49f",
    measurementId: "G-8S6LPFB8YT"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;
