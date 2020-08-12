import React from 'react';
import Firebase from "./firebase";

const FirebaseContext = React.createContext<Firebase|undefined>(undefined);

export default FirebaseContext;