import { FETCH_SONGS, FETCH_SONG, CREATE_SONG, EDIT_SONG, DELETE_SONG } from './types'
import { dbGET, dbNotGET } from '../api'

export const fetchSongs = () => async dispatch => {
    const response = await dbGET.get('/songs')
    if (response.status === 200) {
        dispatch({type: FETCH_SONGS, payload: response.data})
    } else {
        console.error(response.status + response.statusText)
    }
}

export const fetchSong = id => async dispatch => {
    const response = await dbGET.get(`/songs/${id}`)
    if (response.status === 200) {
        dispatch({type: FETCH_SONG, payload: response.data})
    } else {
        console.error(response.status + response.statusText)
    }
}

export const createSong = formData => async dispatch => {
    const response = await dbNotGET.post('/songs', {
        id: formData.id,
        title: formData.title,
        verses: formData.lyrics.split('\n\n'),
        headers: { 'key': formData.pwd}
    })
    if (response.status === 200) {
        dispatch({type: CREATE_SONG, payload: response.data})
    } else {
        console.error(response.status + response.statusText)
    }
}

export const editSong = (id, formData) => async dispatch => {
    const response = await dbNotGET.patch(`/songs/${id}`, {
        title: formData.title,
        verses: formData.lyrics.split('\n\n'),
        headers: { 'key': formData.pwd}
    })
    if (response.status === 200) {
        dispatch({type: EDIT_SONG, payload: response.data})
    } else {
        console.error(response.status + response.statusText)
    }
}

export const deleteSong = (id, pwd) => async dispatch => {
    const response = await dbNotGET.delete(`/songs/${id}`, {
        headers: { 'key': pwd }
    })
    if (response.status === 200) {
        dispatch({type: DELETE_SONG, payload: id})
    } else {
        console.error(response.status + response.statusText)
    }
}