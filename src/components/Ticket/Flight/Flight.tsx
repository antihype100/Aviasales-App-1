import React from 'react';
import './Flight.scss'
import {add,  parseISO} from 'date-fns'

const Flight = (props: any) => {

    const { from, to, date, timeTravel, stops } = props


    const timeOfDeparture: string = parseISO(date).toString().slice(16, 21)
    const arrivalTime = add(parseISO(date), {minutes: timeTravel}).toString().slice(16, 21)

    return (
        <div className='flightWrapper'>
            
            <div className="flightWrapper__from-to flightWrapper__item">
                <h4>{from} – {to}</h4>
                <span>{timeOfDeparture} – {arrivalTime}</span>
            </div>

            <div className="flightWrapper__travel-time flightWrapper__item">
                <h4>В ПУТИ</h4>
                <span>{Math.floor(timeTravel / 60)}ч {timeTravel % 60}м</span>
            </div>
            <div className="flightWrapper__transplants flightWrapper__item">
                <h4>{stops.length} {stops.length === 0
                                                        ? 'ПЕРЕСАДОК'
                                                        : stops.length === 1
                                                        ? 'ПЕРЕСАДКА'
                                                        : 'ПЕРЕСАДКИ'
                }</h4>
                <span>{stops.join(', ')}</span>
            </div>

        </div>
    )
}

export default Flight