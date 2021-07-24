import { UPDATE_SONG_LIST, CANCEL_SEARCH } from "../actions/types"

const defaultState = {
    list: [],
    validSearch: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type) {
        case UPDATE_SONG_LIST:
            return { list: action.payload.map(song => song.id), validSearch: true }
        case CANCEL_SEARCH:
            return defaultState
        default:
            return state
    }
}