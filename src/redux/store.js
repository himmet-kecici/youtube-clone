import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AuthReducer } from './auth/auth.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    auth: AuthReducer,
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store