import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase';

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
    private db: firebase.database.Database;
    private fs: firebase.firestore.DocumentData;
    auth: firebase.auth.Auth;

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
        this.fs = firebase.firestore();
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

    user = (uid: string) => this.db.ref(`users/${uid}`);

    users = (uid: string) => this.db.ref('users');

    // *** School Search Api ***
    loadOptions = async (inputValue: any) => {
        console.log('I am in the firebase load option function.')
        inputValue = inputValue.toLowerCase().replace(/\W/g, "");
        return new Promise((resolve => {
                this.fs.collection('Tag')
                    .orderBy('plainName')
                    .startAt(inputValue)
                    .endAt(inputValue + "\uf8ff")
                    .get()
                    .then((docs: any) => {
                        if (!docs.empty) {
                            let recommendedTags: any = []
                            docs.forEach(function (doc: { id: any; data: () => { (): any; new(): any; tagName: any; }; }) {
                                const tag = {
                                    value: doc.id,
                                    label: doc.data().tagName
                                }
                                recommendedTags.push(tag)
                            });
                            return resolve(recommendedTags)
                        } else {
                            return resolve([])
                        }
                    })
            }));
    }

    getCourses = () => {
        return this.db.ref('courses');
    }
}

export default Firebase;