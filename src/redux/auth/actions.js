import firebase from 'firebase/app'
import auth from '../../firebase/firebase.utils'

export const login = () => async dispatch => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)
    } catch (error) {

    }
}