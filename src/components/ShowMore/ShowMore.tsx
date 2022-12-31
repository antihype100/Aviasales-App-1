import React from 'react';
import './ShowMore.scss'
import {useActions} from "../../hooks/useActions";

const ShowMore = () => {

    const {showMoreTicket} = useActions()

    return (
        <>
            <button onClick={() => showMoreTicket()} className='showMoreBtn'>Показать еще 5 билетов</button>
        </>
    )
}

export default ShowMore