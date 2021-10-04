import firebase from 'firebase/app'
import auth from '../../firebase/firebase.utils'
import { LOAD_PROFILE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'

export const login = () => async dispatch => {
    try {

        dispatch({
            type: LOGIN_REQUEST
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)

        const accessToken = res.credential.accessToken
        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem('youtube-access-token', accessToken)
        sessionStorage.setItem('youtube-user', JSON.stringify(profile))


        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })
        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.message
        })
    }
}