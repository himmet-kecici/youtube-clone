import firebase from 'firebase/app'
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "clone-new-466d5.firebaseapp.com",
    projectId: "clone-new-466d5",
    storageBucket: "clone-new-466d5.appspot.com",
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()