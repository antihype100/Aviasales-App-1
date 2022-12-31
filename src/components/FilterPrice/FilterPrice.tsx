import React, {useState} from 'react';
import './FilterPrice.scss'
import {useActions} from "../../hooks/useActions";

const FilterPrice = () => {
    const [filterPrice, setFilterPrice] = useState(false)
    const [filterFastest, setFilterFastest] = useState(false)
    const [filterOptimal, setFilterOptimal] = useState(false)

   const {setFilter} = useActions()

    // Не получилось описать event
    const handler = (e: any) => {
        setFilter(e.target.dataset.name)
        if (e.target.dataset.name === 'lowPrice') {
            setFilterPrice(true)
        } else {
            setFilterPrice(false)
        }

        if (e.target.dataset.name === 'fastest') {
            setFilterFastest(true)
        } else {
            setFilterFastest(false)
        }

        if (e.target.dataset.name === 'optimal') {
            setFilterOptimal(true)
        } else {
          setFilterOptimal(false)
        }
    }

    return (
        <nav className='filterPrice'>
            <ul className='filterPrice__list'>
                <li data-name='lowPrice' onClick={(e) => handler(e)}
                    className={`filterPrice__item ${filterPrice ? 'active' : ''}`}>Самый дешевый
                </li>
                <li data-name='fastest' onClick={(e) => handler(e)}
                    className={`filterPrice__item ${filterFastest ? 'active' : ''}`}>Самый быстрый
                </li>
                <li data-name='optimal' onClick={(e) => handler(e)}
                    className={`filterPrice__item ${filterOptimal ? 'active' : ''}`}>Оптимальный
                </li>
            </ul>
        </nav>
    )
}
export default FilterPrice