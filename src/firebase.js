import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =firebase.initializeApp({
    apiKey: "AIzaSyDDJ666Yp4Du41TUX5qJTyy2IkHIPQ6kJ4",
    authDomain: "clone-mar-ef70b.firebaseapp.com",
    projectId: "clone-mar-ef70b",
    storageBucket: "clone-mar-ef70b.appspot.com",
    messagingSenderId: "1071875459577",
    appId: "1:1071875459577:web:6b4a579aebf5e7950a5528",
    measurementId: "G-PWLDLWNG66"
  });

const db=firebase.firestore();

export { db }