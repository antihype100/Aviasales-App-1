import {SET_TICKETS} from "../types/ticketsList";

const initialState: any = {
    tickets: [],
    stop: false
}

export const ticketsListReducer = (state = initialState, action: any ) => {
    switch (action.type) {
        case SET_TICKETS: {
            return {
                ...state,
                tickets: [...state.tickets, ...action.tickets.tickets],
                stop: action.tickets.stop
            }
        }

        default:
            return state
    }
}