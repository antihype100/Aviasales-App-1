import React, {useEffect, useState} from 'react';
import Ticket from "../Ticket/Ticket";
import {asyncSetTickets} from "../../redux/action-creators/ticketsList";
import {useDispatch, useSelector} from "react-redux";
import {AviasalesApi} from "../../services/aviasales-api";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const TicketsList = () => {

    const api = new AviasalesApi()

    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        api.getSearchId().then(data => {
            dispatch<any>(asyncSetTickets(data.searchId))
        })
        setTimeout(() => setLoaded(true), 1000)
    }, [])

    const ticketsState: any = useSelector<any>(state => state.tickets);
    const ticketsOnPage: any = useSelector<any>(state => state.ticketsOnPage.ticketsOnPage);
    const filter: any = useSelector<any>(state => state.filter)


    if (filter.priceTimeFilter === 'lowPrice') {
        ticketsState.tickets.sort((a: any, b: any) => parseFloat(a.price) - parseFloat(b.price))
    }
    if (filter.priceTimeFilter === 'fastest') {
        ticketsState.tickets.sort((a: any, b: any) => parseFloat(a.segments[0].duration + a.segments[1].duration) - parseFloat(b.segments[0].duration + b.segments[1].duration))
    }
    if (filter.priceTimeFilter === 'optimal') {
        ticketsState.tickets.sort((a: any, b: any) => parseFloat(a.segments[0].duration + a.segments[1].duration + a.price) - parseFloat(b.segments[0].duration + b.segments[1].duration + b.price))

    }

    const element = ticketsState.tickets.map((el: any) => {
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

    return loaded ?
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