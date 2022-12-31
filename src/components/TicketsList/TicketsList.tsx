import React, {useEffect} from 'react';
import Ticket from "../Ticket/Ticket";
import {useActions} from "../../hooks/useActions";
import {AviasalesApi} from "../../services/aviasales-api";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {ITicket} from "../../redux/types/ticketsList";

const TicketsList = () => {

    const api = new AviasalesApi()

    const {asyncSetTickets} = useActions()

    useEffect(() => {
        api.getSearchId().then(data => {
            asyncSetTickets(data.searchId)
        })
    }, [])

    const {tickets, loading} = useTypedSelector(state => state.tickets);
    const {ticketsOnPage} = useTypedSelector(state => state.ticketsOnPage);
    const filter = useTypedSelector(state => state.filter)


    if (filter.priceTimeFilter === 'lowPrice') {
        tickets.sort((a: any, b: any) => a.price - b.price)
    }
    if (filter.priceTimeFilter === 'fastest') {
        tickets.sort((a: any, b: any) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration))
    }
    if (filter.priceTimeFilter === 'optimal') {
        tickets.sort((a: any, b: any) => (a.segments[0].duration + a.segments[1].duration + a.price) - (b.segments[0].duration + b.segments[1].duration + b.price))

    }


    const element = tickets.map((el: ITicket | any ) => {
        const amountTransplants = el.segments[0].stops.length >= el.segments[1].stops.length
                                                                ? el.segments[0].stops.length
                                                                : el.segments[1].stops.length
        if (filter.without && amountTransplants === 0) {
            return (
                <li key={generateUniqueID()}>
                    <Ticket price={el.price}
                            carrier={el.carrier}
                            flights={el.segments}

                    />
                </li>
            )
        }

        if (filter.oneTransplant && amountTransplants === 1){
            return (
                <li key={generateUniqueID()}>
                    <Ticket price={el.price}
                            carrier={el.carrier}
                            flights={el.segments}

                    />
                </li>
            )
        }

        if (filter.twoTransplant && amountTransplants === 2){
            return (
                <li key={generateUniqueID()}>
                    <Ticket price={el.price}
                            carrier={el.carrier}
                            flights={el.segments}

                    />
                </li>
            )
        }

        if (filter.threeTransplant && amountTransplants === 3){
            return (
                <li key={generateUniqueID()}>
                    <Ticket price={el.price}
                            carrier={el.carrier}
                            flights={el.segments}

                    />
                </li>
            )
        }


        if (!filter.threeTransplant
            && !filter.twoTransplant
            && !filter.oneTransplant
            && !filter.without
            && !filter.all
        ){
            return (
                <li key={generateUniqueID()}>
                    <Ticket price={el.price}
                            carrier={el.carrier}
                            flights={el.segments}

                    />
                </li>
            )
        }

        return null
    })

    return loading ?
        <ul>
            {element.filter((val: any) => val !== null).slice(0 , 6 + ticketsOnPage)}
        </ul>
        : <h1 style={
            {
                marginLeft: '80px',
                marginBottom: '20px',
            }
        }>Билеты загрузятся через пару секунд</h1>
}

export default TicketsList