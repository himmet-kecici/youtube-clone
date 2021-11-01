import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTOR_VIDEO_FAIL, SELECTOR_VIDEO_REQUEST, SELECTOR_VIDEO_SUCCESS } from "../actionTypes"

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'

}
export const homeVideosReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {

        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:
                    state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category

            }
        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        default:
            return {
                ...state
            }
    }

}

export const selectedVideoReducer = (
    state = {
        loading: true,
        video: null,
    }, action
) => {
    const { payload, type } = action
    switch (type) {

        case SELECTOR_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SELECTOR_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false
            }
        case SELECTOR_VIDEO_FAIL:
            return {
                ...state,
                video: null,
                loading: false,
                error: payload
            }
        default:
            return {
                ...state
            }
    }
}