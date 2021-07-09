import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =  firebase.initializeApp ({
    apiKey: "AIzaSyBbBKFbncICfDeHGiKJSy3z1J8ziJmDOv8",
    authDomain: "clone-70e44.firebaseapp.com",
    projectId: "clone-70e44",
    storageBucket: "clone-70e44.appspot.com",
    messagingSenderId: "35722756405",
    appId: "1:35722756405:web:c65561f3b1afae6d030c7c",
    measurementId: "G-X8P7F0DWRW"
});

  const auth = firebase.auth();

  export { auth }