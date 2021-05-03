import firebase from "firebase/app";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqxt-_ak34lhUMq9MDM9TjonlVMqLDYQI",
    authDomain: "auth-test-43cce.firebaseapp.com",
    projectId: "auth-test-43cce",
    storageBucket: "auth-test-43cce.appspot.com",
    messagingSenderId: "633181805378",
    appId: "1:633181805378:web:5d322b7244f41414b4c6db"
});

export const auth = firebaseApp.auth();
export default firebaseApp;