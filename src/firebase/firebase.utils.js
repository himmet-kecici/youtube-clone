
import firebase from 'firebase/app'

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: "clone-34cf1.firebaseapp.com",
    projectId: "clone-34cf1",
    storageBucket: "clone-34cf1.appspot.com",
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(firebaseConfig)