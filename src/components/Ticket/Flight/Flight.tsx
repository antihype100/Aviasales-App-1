import React from 'react';
import './Flight.scss'

const Flight = () => {

    return (
        <div className='flightWrapper'>
            
            <div className="flightWrapper__from-to flightWrapper__item">
                <h4>MOW – HKT</h4>
                <span>10:45 – 08:00</span>
            </div>

            <div className="flightWrapper__travel-time flightWrapper__item">
                <h4>В ПУТИ</h4>
                <span>21ч 15м</span>
            </div>
            <div className="flightWrapper__transplants flightWrapper__item">
                <h4>2 ПЕРСАДКИ</h4>
                <span>HKG, JNB</span>
            </div>

        </div>
    )
}

export default Flight