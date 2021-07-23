import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form"

import songsReducer from './songsReducer'
import alertReducer from './alertReducer'
import playlistReducer from './playlistReducer'

export default combineReducers({
    songs: songsReducer,
    alert: alertReducer,
    form: formReducer,
    playlist: playlistReducer
})