import { FETCH_PLAYLISTS, REPLACE_PLAYLIST, DELETE_PLAYLIST } from "../actions/types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {list: [], loaded: false }, action) => {
    switch(action.type) {
        case FETCH_PLAYLISTS:
            return { list: action.payload, loaded: true }
        case REPLACE_PLAYLIST:
            const listOfIds = state.list.map(pl => pl.id)
            const idx = listOfIds.indexOf(action.payload.loaded)
            if (idx === -1) {
                return state
            }
            const clonedState = {...state}
            clonedState.list[idx].songs = action.payload.list
            return clonedState
        case DELETE_PLAYLIST:
            return { list: state.list.filter(pl => pl.id !== action.payload), ...state}
        default:
            return state
    }
}