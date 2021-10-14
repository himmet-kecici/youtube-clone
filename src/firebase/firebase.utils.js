import firebase from 'firebase/app'
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "clone-3-44335.firebaseapp.com",
    projectId: "clone-3-44335",
    storageBucket: "clone-3-44335.appspot.com",
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()