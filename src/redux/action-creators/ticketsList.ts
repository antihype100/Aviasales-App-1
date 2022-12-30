import {SET_TICKETS} from "../types/ticketsList";
import {AviasalesApi} from "../../services/aviasales-api";
import ticketsList from "../../components/TicketsList/TicketsList";


const aviasalesApi = new AviasalesApi()

const requestTickets = (dispatch: any, id: string) => {
    fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
        .then(tickets => tickets.json())
        .then(tickets => {
            dispatch(setTickets(tickets))
            if (tickets.stop) {
                return
            }
            requestTickets(dispatch, id)
        })
        .catch(() => requestTickets(dispatch, id))
}

export const setTickets = (tickets: any) => {
    return {
        type: SET_TICKETS,
        tickets
    }

}

export const asyncSetTickets = (id: string) => {
    return (dispatch: any) => {
        requestTickets(dispatch, id)

    }
}