import { FETCH_PLAYLISTS } from "../actions/types"

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch(action.type) {
        case FETCH_PLAYLISTS:
            return action.payload
        default:
            return state
    }
}