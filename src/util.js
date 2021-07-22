import { NEW_ALERT, REMOVE_ALERT } from './actions/types'


const setTimeoutToRemoveAlert = (dispatch) => {
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)
}

export const handleError = (err, dispatch) => {
    if (err.response.status === 401) {
        dispatch({type: NEW_ALERT, payload: {msg: 'Hibás jelszó', type: 'error'}})
    } else if (err.response.status === 500 && err.response.data.startsWith('Error: Insert failed, duplicate id')) {
        dispatch({type: NEW_ALERT, payload: {msg: 'Ilyen sorszámú dal már létezik az adatbázisban', type: 'error'}})
    } else {
        dispatch({type: NEW_ALERT, payload: {msg: `${err.response.status}: ${err.response.data}`, type: 'error'}})
    }
    setTimeoutToRemoveAlert(dispatch)
}