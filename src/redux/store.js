import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AuthReducer } from './auth/auth.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import { homeVideosReducer } from './videos/videos.reducer'
import { selectedVideoReducer } from './videos/videos.reducer'
import { channelDetailsReducer } from './channel/channel.reducer'
import { commentListReducer } from './comments/comments.reducer'

const rootReducer = combineReducers({
    auth: AuthReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentListReducer

})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store