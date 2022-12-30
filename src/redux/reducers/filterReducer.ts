import {
    TOGGLE_ALL_STATE,
    TOGGLE, FILTER_BY_PRICE
} from "../types/filter";


const initialState: any = {
    all: false,
    without: false,
    oneTransplant: false,
    twoTransplant: false,
    threeTransplant: false,
    priceTimeFilter: ''
}

export const filterReducer = (state= initialState, action: {type: string, name: string} ) => {
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
        case FILTER_BY_PRICE: {
            if (action.name == state.priceTimeFilter) {
                return {
                    ...state,
                    priceTimeFilter: ''
                }
            }
            return {
                ...state,
                priceTimeFilter: action.name
            }
        }
        default:
            return state
    }
}