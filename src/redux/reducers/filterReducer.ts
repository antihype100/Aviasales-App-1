import {FilterActions, FilterActionsType, IFilterState} from "../types/filter";


const initialState: IFilterState = {
    all: false,
    without: false,
    oneTransplant: false,
    twoTransplant: false,
    threeTransplant: false,
    priceTimeFilter: ''
}

export const filterReducer = (state = initialState, action: FilterActions ): IFilterState => {
    switch (action.type) {
        case FilterActionsType.TOGGLE: {
            console.log(action.payload)
            return {
                ...state,
                [action.payload]: !state[action.payload]
            }
        }
        case FilterActionsType.FILTER_BY_PRICE: {
            if (action.payload === state.priceTimeFilter) {
                return {
                    ...state,
                    priceTimeFilter: ''
                }
            }
            return {
                ...state,
                priceTimeFilter: action.payload
            }
        }
        case FilterActionsType.TOGGLE_ALL_STATE: {
            return {
                ...state,
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