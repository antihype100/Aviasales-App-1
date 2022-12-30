import {SHOW_MORE} from "../types/showMore";


const initialState: any = {
    ticketsOnPage: 0
}

export const showMoreReducer = (state= initialState, action: {type: string, name: string} ) => {
    switch (action.type) {
        case SHOW_MORE: {
            return {
                ticketsOnPage: state.ticketsOnPage + 5
            }
        }

        default:
            return state
    }
}