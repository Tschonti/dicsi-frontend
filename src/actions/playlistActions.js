import {
    ADD_TO_PLAYLIST,
    REMOVE_FROM_PLAYLIST,
    PLAYLIST_NEXT,
    START_PLAYLIST,
    STOP_PLAYLIST,
    CLEAR_PLAYLIST,
    TOGGLE_VISIBILITY,
    MOVE_IN_PLAYLIST,
    SAVE_PLAYLIST,
    FETCH_PLAYLISTS,
    LOAD_PLAYLIST,
} from './types'
import { db } from '../api'
import { handleError } from '../util'
import history from '../history'

export const addToPlaylist = id => {
    return { type: ADD_TO_PLAYLIST, payload: id }
}

export const removeFromPlaylist = id => {
    return { type: REMOVE_FROM_PLAYLIST, payload: id }
}

export const playlistNext = (next, state) => {
    if (!state.active) {
        return
    }
    if (next) {
        if (state.currentIndex === state.list.length - 1) {
            history.push(`/dicsi/songs/${state.list[0]}`)
            return { type: PLAYLIST_NEXT, payload: 0 }
        } else {
            history.push(`/dicsi/songs/${state.list[state.currentIndex + 1]}`)
            return { type: PLAYLIST_NEXT, payload: state.currentIndex + 1 }
        }
    } else {
        if (state.currentIndex < 1) {
            history.push(`/dicsi/songs/${state.list[state.list.length - 1]}`)
            return { type: PLAYLIST_NEXT, payload: state.list.length - 1 }
        } else {
            history.push(`/dicsi/songs/${state.list[state.currentIndex - 1]}`)
            return { type: PLAYLIST_NEXT, payload: state.currentIndex - 1 }
        }
    }
}

export const startPlaylist = (state) => {
    history.push(`/dicsi/songs/${state.list[state.currentIndex]}`)
    return {type: START_PLAYLIST}
}
export const stopPlaylist = () => {
    return {type: STOP_PLAYLIST}
}

export const clearPlaylist = () => {
    return {type: CLEAR_PLAYLIST}
}

export const toggleVisibility = () => {
    return { type: TOGGLE_VISIBILITY }
}

export const moveInPlaylist = (index, up) => {
    return { type: MOVE_IN_PLAYLIST, payload: {index, up}}
}

export const savePlaylist = formData => async (dispatch, getState) => {
    try {
        const response = await db.post('/playlists/', {
            name: formData.name,
            songs: getState().playlist.list
        }, { headers: {'Authorization': `Token ${getState().auth.token}` }})
        dispatch({type: SAVE_PLAYLIST, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const fetchPlaylists = () => async dispatch => {
    try {
        const response = await db.get('/playlists/?format=json')
        dispatch({type: FETCH_PLAYLISTS, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const loadPlaylist = id => async dispatch => {
    try {
        const response = await db.get(`/playlists/${id}?format=json`)
        dispatch({type: LOAD_PLAYLIST, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}