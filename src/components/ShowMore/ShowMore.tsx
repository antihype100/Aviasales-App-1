import React from 'react';
import './ShowMore.scss'
import {useDispatch} from "react-redux";
import {showMoreTicket} from "../../redux/action-creators/showMore";

const ShowMore = () => {

    const dispatch = useDispatch()

    return (
        <>
            <button onClick={(e) => dispatch(showMoreTicket())} className='showMoreBtn'>Показать еще 5 билетов</button>
        </>
    )
}

export default ShowMore