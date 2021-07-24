import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form"

import songsReducer from './songsReducer'
import alertReducer from './alertReducer'
import playlistReducer from './playlistReducer'
import searchListReducer from './searchListReducer'

export default combineReducers({
    songs: songsReducer,
    searchList: searchListReducer,
    alert: alertReducer,
    form: formReducer,
    playlist: playlistReducer
})