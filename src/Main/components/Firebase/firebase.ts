import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZ5YJomxPVeXOjWU3eW01tQNulMG3gPpw",
    authDomain: "time-buddy-f7b1a.firebaseapp.com",
    databaseURL: "https://time-buddy-f7b1a.firebaseio.com",
    projectId: "time-buddy-f7b1a",
    storageBucket: "time-buddy-f7b1a.appspot.com",
    messagingSenderId: "2885386463",
    appId: "1:2885386463:web:3397cb5c6e0be8e4df696a"
};

class Firebase {
    auth: firebase.auth.Auth;

    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email: string, password: string) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email: string, password: string) => this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = (password: string) => {
        const currentUser = this.auth.currentUser;

        if(currentUser) return currentUser.updatePassword(password);
    }
}

export default Firebase;