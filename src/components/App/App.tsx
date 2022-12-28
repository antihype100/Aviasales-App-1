import React from 'react';
import './App.scss'
import Logo from "../Logo/Logo";
import FilterPrice from "../FilterPrice/FilterPrice";
import Ticket from "../Ticket/Ticket";
import ShowMore from "../ShowMore/ShowMore";
import FilterTransolantants from "../FilterTransplants/FilterTransplants";

const App: React.FC = () => {
    return (
        <>
            <Logo/>

            <div className='contentWrapper'>
                <FilterTransolantants/>

                <div>
                    <FilterPrice/>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                    <ShowMore/>
                </div>
            </div>

        </>
    )
}

export default App
