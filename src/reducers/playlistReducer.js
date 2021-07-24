import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST, PLAYLIST_NEXT, REMOVE_COMPLETELY, START_PLAYLIST, STOP_PLAYLIST, CLEAR_PLAYLIST } from "../actions/types"

const defaultState = {
    list: [],
    currentIndex: 0,
    active: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TO_PLAYLIST:
            return {...state, list: [...state.list, action.payload]}
        case REMOVE_FROM_PLAYLIST:
            const remIdx = state.list.indexOf(action.payload)
            if (remIdx === -1) {
                return state
            }
            let curIdx = state.currentIndex
            if (remIdx < curIdx) {
                curIdx -= 1
            }
            const clonedState = [...state.list]
            clonedState.splice(remIdx, 1)
            return { ...state, list: clonedState, currentIndex: curIdx }
        // TODO bajvan!!
        case REMOVE_COMPLETELY:
            curIdx = state.currentIndex
            const toRemove = []
            const clonedStateAgain = [...state.list]
            clonedStateAgain.forEach((el, idx) => {
                if (el === action.payload) {
                    toRemove.push(el)
                    if (idx < curIdx) {
                        curIdx -=1
                    }
                }
            })
            toRemove.forEach((songInd, ind) => {
                clonedStateAgain.splice(songInd - ind, 1)
            })
            return { ...state, list: clonedStateAgain, currentIndex: curIdx}
        case PLAYLIST_NEXT:
            return { ...state, currentIndex: action.payload }
        case START_PLAYLIST:
            return { ...state, active: true}
        case STOP_PLAYLIST:
            return { ...state, active: false}
        case CLEAR_PLAYLIST:
            return { list: [], currentIndex: 0, active: false }
        default:
            return state
    }
}