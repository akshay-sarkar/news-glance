import firebase from 'firebase/app';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBSQ0SchiukUFpEb4zp_85yBKxZ5rYDR2c",
    authDomain: "lets-read-news.firebaseapp.com",
    databaseURL: "https://lets-read-news.firebaseio.com",
    projectId: "lets-read-news",
    storageBucket: "lets-read-news.appspot.com",
    messagingSenderId: "1025448345928"
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export default auth;