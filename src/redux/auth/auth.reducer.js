import { LOAD_PROFILE, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionTypes'

const initialState = {
    accessToken: sessionStorage.getItem('youtube-access-token') ? sessionStorage.getItem('youtube-access-token') : null,
    user: sessionStorage.getItem('youtube-user') ? JSON.parse(sessionStorage.getItem('youtube-user')) : null,
    loading: false

}

export const AuthReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: payload,
                loading: false

            }
        case LOGIN_FAILURE:
            return {
                ...state,
                accessToken: null,
                loading: false,
                error: payload

            }
        case LOAD_PROFILE:
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}