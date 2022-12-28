import React from 'react';
import './FilterPrice.scss'

const FilterPrice = () => {

    return (
        <nav className='filterPrice'>
            <ul className='filterPrice__list'>
                <li className='filterPrice__item'>Самый дешевый</li>
                <li className='filterPrice__item'>Самый быстрый</li>
                <li className='filterPrice__item'>Оптимальный</li>
            </ul>
        </nav>
    )
}

export default FilterPrice