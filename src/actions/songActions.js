import {
    FETCH_SONGS,
    FETCH_SONG,
    CREATE_SONG,
    EDIT_SONG,
    DELETE_SONG,
    CLEAR_PLAYLIST,
    UPDATE_WITH_ID,
    UPDATE_WITH_TERM,
    CANCEL_SEARCH } from './types'
import { dbGET, dbNotGET } from '../api'
import history from '../history'
import { handleError } from '../util'

export const fetchSongs = () => async dispatch => {
    try {
        const response = await dbGET.get('/songs/?format=json')
        dispatch({type: FETCH_SONGS, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const fetchSong = id => async dispatch => {
    try {
        const response = await dbGET.get(`/songs/${id}/?format=json`)
        dispatch({type: FETCH_SONG, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }

}

export const findId = (id) => async dispatch => {
    try {
        const response = await dbGET.get(`/songs/${id}/?format=json`)
        dispatch({type: UPDATE_WITH_ID, payload: response.data})
    } catch (err) {
        if (err.response) {
            if (err.response.status === 404) {
                dispatch({type: UPDATE_WITH_ID, payload: {id: null}})
            } else {
                handleError(err, dispatch)
            }
        } else {
            handleError(err, dispatch)
        }
    }
}

export const searchSongs = (term) => async dispatch => {
    try {
        const response = await dbGET.get(`/search/${term}/`)
        dispatch({type: UPDATE_WITH_TERM, payload: response.data})
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const cancelSearch = () => {
    return { type: CANCEL_SEARCH}
}

export const createSong = formData => async dispatch => {
    try {
        const response = await dbNotGET.post('/songs/', {
            id: parseInt(formData.id),
            title: formData.title,
            lyrics: formData.lyrics.split('\n\n').join('###')
        }, /*{ headers: {'key': formData.pwd }}*/)
        dispatch({type: CREATE_SONG, payload: response.data})
        history.push(`/dicsi/songs/${formData.id}`)
    } catch (err) {
        console.log(err.response)
        handleError(err, dispatch)
    }

}

export const editSong = (id, formData) => async dispatch => {
    try {
        const response = await dbNotGET.patch(`/songs/${id}/`, {
            title: formData.title,
            lyrics: formData.lyrics.split('\n\n').join('###'),
        }, /*{ headers: {'key': formData.pwd }}*/)
        dispatch({type: EDIT_SONG, payload: response.data})
        history.push(`/dicsi/songs/${id}`)
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const deleteSong = (id, pwd) => async (dispatch, getState) => {
    try {
        await dbNotGET.delete(`/songs/${id}/`, /*{
            headers: { 'key': pwd }
        }*/)
        if (getState().playlist.list.includes(parseInt(id))) {
            dispatch({type: CLEAR_PLAYLIST})
        }
        dispatch({type: DELETE_SONG, payload: id})
        history.push('/dicsi/')
    } catch(err) {
        handleError(err, dispatch)
    }
}