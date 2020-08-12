import React from 'react';
import Firebase from "./firebase";

const FirebaseContext = React.createContext<Firebase|undefined>(undefined);

export const withFirebase = (Component: React.ComponentType<any>) => (props?: any) => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;


