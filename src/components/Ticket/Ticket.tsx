import React from 'react';
import CompanyLogo from '../../img/s7logo.png'
import './Ticket.scss'
import Flight from "./Flight/Flight";

const Ticket = () => {

    return (
        <div className='ticketWrapper'>
            <header className='ticketWrapper__header'>
                <span className='ticketWrapper__price'> 13 400 Р</span>
                <img src={CompanyLogo} alt=""/>
            </header>
            <Flight/>
            <Flight/>
        </div>
    )
}

export default Ticket