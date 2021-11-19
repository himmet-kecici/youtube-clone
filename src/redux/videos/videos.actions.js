import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTOR_VIDEO_FAIL, SELECTOR_VIDEO_REQUEST, SELECTOR_VIDEO_SUCCESS, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, RELATED_VIDEO_FAIL } from "../actionTypes"
import request from "../../api"


export const getPopularVideos = () => async (dispatch, getState) => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST,

        })
        const { data } = await request("/videos", {
            params: {
                part: 'snippet, contentDetails, statistics',
                chart: 'mostPopular',
                regionCode: 'TR',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
            }
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All'
            }

        })
    } catch (error) {
        console.log(error.massage)
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.massage
        })
    }
}


export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {

        dispatch({
            type: HOME_VIDEOS_REQUEST,

        })
        const { data } = await request("/search", {
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video'
            }
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
            }
        })
    } catch (error) {
        console.log(error.massage)
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.massage
        })
    }
}

export const getVideoById = (id) => async dispatch => {
    try {
        dispatch({
            type: SELECTOR_VIDEO_REQUEST
        })
        const { data } = await request('/videos', {
            params: {
                part: 'snippet,statistics',
                id: id
            }
        })
        dispatch({
            type: SELECTOR_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SELECTOR_VIDEO_FAIL,
            payload: error.massage
        })
    }
}

export const getRelatedVideos = (id) => async dispatch => {
    try {
        dispatch({
            type: RELATED_VIDEO_REQUEST
        })
        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                relatedToVideoId: id,
                maxResults: 15,
                type: 'video'
            }
        })
        dispatch({
            type: RELATED_VIDEO_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.response.data.message)
        dispatch({
            type: RELATED_VIDEO_FAIL,
            payload: error.response.data.message
        })
    }
}