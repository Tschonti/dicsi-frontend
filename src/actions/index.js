import { FETCH_SONGS, FETCH_SONG, CREATE_SONG, EDIT_SONG, DELETE_SONG, NEW_ALERT, REMOVE_ALERT, ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, REMOVE_COMPLETELY, PLAYLIST_NEXT, START_PLAYLIST, STOP_PLAYLIST, CLEAR_PLAYLIST, UPDATE_SONG_LIST, CANCEL_SEARCH, TOGGLE_VISIBILITY } from './types'
import { dbGET, dbNotGET } from '../api'
import history from '../history'
import { handleError } from '../util'

export const fetchSongs = () => async dispatch => {
    try {
        const response = await dbGET.get('/songs')
        dispatch({type: FETCH_SONGS, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const fetchSong = id => async dispatch => {
    try {
        const response = await dbGET.get(`/songs/${id}`)
        dispatch({type: FETCH_SONG, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }

}

export const findId = (id) => async dispatch => {
    try {
        const response = await dbGET.get(`/songs?id=${id}`)
        dispatch({type: UPDATE_SONG_LIST, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const searchSongs = (term) => async dispatch => {
    try {
        const response = await dbGET.get(`/songs?title_like=${term}`)
        dispatch({type: UPDATE_SONG_LIST, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const cancelSearch = () => {
    return { type: CANCEL_SEARCH}
}

export const createSong = formData => async dispatch => {
    try {
        const response = await dbNotGET.post('/songs', {
            id: parseInt(formData.id),
            title: formData.title,
            verses: formData.lyrics.split('\n\n')
        }, { headers: {'key': formData.pwd }})
        dispatch({type: CREATE_SONG, payload: response.data})
        history.push(`/dicsi/songs/${formData.id}`)
    } catch (err) {
        console.log(err.response)
        handleError(err, dispatch)
    }

}

export const editSong = (id, formData) => async dispatch => {
    try {
        const response = await dbNotGET.patch(`/songs/${id}`, {
            title: formData.title,
            verses: formData.lyrics.split('\n\n'),
        }, { headers: {'key': formData.pwd }})
        dispatch({type: EDIT_SONG, payload: response.data})
        history.push(`/dicsi/songs/${id}`)
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const deleteSong = (id, pwd) => async dispatch => {
    try {
        await dbNotGET.delete(`/songs/${id}`, {
            headers: { 'key': pwd }
        })
        dispatch({type: REMOVE_COMPLETELY, payload: id}) // TODO bajvan!!
        dispatch({type: DELETE_SONG, payload: id})
        history.push('/dicsi/')
    } catch(err) {
        handleError(err, dispatch)
    }
}

export const newAlert = (msg, type) => {
    return {type: NEW_ALERT, payload: {msg, type}}
}

export const removeAlert = () => {
    return {type: REMOVE_ALERT}
}

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
