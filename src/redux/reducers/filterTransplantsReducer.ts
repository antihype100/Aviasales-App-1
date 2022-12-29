import {
    TOGGLE_ALL_STATE,
    TOGGLE
} from "../types/filterTransplants";


const initialState: any = {
    all: false,
    without: false,
    oneTransplant: false,
    twoTransplant: false,
    threeTransplant: false,
}

export const filterTransplantsReducer = (state= initialState, action: {type: string, name: string} ) => {
    switch (action.type) {
        case TOGGLE: {
            return {
                ...state,
                [action.name]: !state[action.name]
            }
        }
        case TOGGLE_ALL_STATE: {
            return {
                all: !state.all,
                without: !state.all,
                oneTransplant: !state.all,
                twoTransplant: !state.all,
                threeTransplant: !state.all
            }
        }
        default:
            return state
    }
}