import app from 'firebase/app';
import 'firebase/auth';
require("dotenv").config();

const firebaseConfig = {
    apiKey: "AIzaSyBycRVmUhAIHJo4oMfklCyRkibQd1Sg_UI",
    authDomain: "rocknrate.firebaseapp.com",
    databaseURL: "https://rocknrate.firebaseio.com",
    projectId: "rocknrate",
    storageBucket: "",
    messagingSenderId: "402762985269",
    appId: "1:402762985269:web:d9331b4c010485086fa67c"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}
export default Firebase;