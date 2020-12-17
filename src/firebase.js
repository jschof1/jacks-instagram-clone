// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCswIcKps1tZ8iHKz-HK9IEg27_fz2ZnDU",
    authDomain: "jacks-instagram-clone.firebaseapp.com",
    databaseURL: "https://jacks-instagram-clone-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jacks-instagram-clone",
    storageBucket: "jacks-instagram-clone.appspot.com",
    messagingSenderId: "326516820994",
    appId: "1:326516820994:web:ae5c27e9e46fd61441ab1b",
    measurementId: "G-18CGP67L51"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

 
