import React from 'react';

import Firebase, { withFirebase } from '../Firebase';

interface Props {
    firebase: Firebase;
}

const SignOutButton = ({ firebase }: Props) => (
    <button type="button" onClick={firebase.doSignOut}>
        Sign Out
    </button>
);

export default withFirebase(SignOutButton);