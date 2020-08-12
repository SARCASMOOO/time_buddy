import React from 'react';
import app from 'firebase/app';

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
    constructor() {
        app.initializeApp(firebaseConfig);
    }
}

export default Firebase;