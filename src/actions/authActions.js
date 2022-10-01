import { db } from '../api'
import history from '../history'
import { BASE_URL, handleError } from '../util'
import { LOGIN, LOGOUT } from './types'
import { Cookies } from 'react-cookie'

export const login = ({ username, password }) => async dispatch => {
    try {
        const response = await db.post('/api-token-auth/', { username, password })
        dispatch({ type: LOGIN, payload: response.data.token })
        const cookieManager = new Cookies()
        cookieManager.set('token', response.data.token, {
            path: BASE_URL,
            maxAge: 12*31*24*60*60
        })
        history.goBack()
    } catch (err) {
        handleError(err, dispatch)
    }
}

export const loginFromCookie = token => {
    return { type: LOGIN, payload: token }
}

export const logout = () => {
    const cookieManager = new Cookies()
    cookieManager.remove('token', {
        path: BASE_URL,
        maxAge: 12*31*24*60*60
    })
    return { type: LOGOUT }
}