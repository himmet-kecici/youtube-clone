import firebase from 'firebase/app'
import auth from '../../firebase/firebase.utils'
import { LOGIN_REQUEST } from '../actionTypes'

export const login = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
    } catch (error) {

    }
}