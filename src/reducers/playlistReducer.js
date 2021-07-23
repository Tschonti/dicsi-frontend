import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, PLAYLIST_NEXT } from "../actions/types"

const defaultState = {
    playlist: [],
    currentIndex: -1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TO_PLAYLIST:
            return {...state, playlist: [...state.playlist, action.payload]}
        case REMOVE_FROM_PLAYLIST:
            const remIdx = state.playlist.indexOf(action.payload)
            if (remIdx === -1) {
                return state
            }
            let curIdx = state.currentIndex
            if (remIdx < curIdx) {
                curIdx -= 1
            }
            const clonedState = [...state.playlist]
            return { currentIndex: curIdx, playlist: clonedState.splice(remIdx, 1)}
        case PLAYLIST_NEXT:
            if (action.payload) {
                if (state.currentIndex === state.playlist.length - 1) {
                    return state
                } else {
                    return {...state, currentIndex: state.currentIndex + 1}
                }
            } else {
                if (state.currentIndex === 0) {
                    return state
                } else {
                    return {...state, currentIndex: state.currentIndex - 1}
                }
            }
        default:
            return state
    }
}