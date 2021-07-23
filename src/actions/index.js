import { FETCH_SONGS, FETCH_SONG, CREATE_SONG, EDIT_SONG, DELETE_SONG, NEW_ALERT, REMOVE_ALERT, ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, PLAYLIST_NEXT } from './types'
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
        dispatch({type: FETCH_SONGS, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const searchSongs = (term) => async dispatch => {
    try {
        const response = await dbGET.get(`/songs?title_like=${term}`)
        dispatch({type: FETCH_SONGS, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const createSong = formData => async dispatch => {
    try {
        const response = await dbNotGET.post('/songs', {
            id: formData.id,
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

export const playlistNext = next => {
    return { type: PLAYLIST_NEXT, payload: next }
}