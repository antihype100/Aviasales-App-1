import React, {useEffect, useState} from 'react';
import './App.scss'
import Logo from "../Logo/Logo";
import FilterPrice from "../FilterPrice/FilterPrice";
import ShowMore from "../ShowMore/ShowMore";
import TicketsList from "../TicketsList/TicketsList";
import FilterTransplants from "../FilterTransplants/FilterTransplants";


const App: React.FC = (props) => {



    // const updateWidth = () => setWidth(window.innerWidth)
    // useEffect(() => {
    //     window.addEventListener('resize', updateWidth);
    //     return () => window.removeEventListener('resize', updateWidth);
    // })

    if (window.innerWidth <= 740) {
        return (
            <>
                <Logo />
                <div className='contentWrapper' >


                    <div>
                        <FilterPrice/>
                        <FilterTransplants/>
                        <TicketsList/>
                        <ShowMore/>
                    </div>

                </div>
            </>
        )
    }

    return (
        <>
            <Logo/>
            <div className='contentWrapper' >

                <FilterTransplants/>
                <div>
                    <FilterPrice/>
                    <TicketsList/>
                    <ShowMore/>
                </div>

            </div>
        </>
    )
}

export default App
