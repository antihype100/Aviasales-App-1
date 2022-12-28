import React from 'react';
import './FilterTransplants.scss'

const FilterTransolantants = () => {

    return (
        <div className='filterTransplantsForm'>
            <h3>Количество пересадок</h3>
            <form className='filterTransplantsForm__form' action="">
                <div>
                    <input name='Все' type="checkbox"/>
                    <label htmlFor="Все">Все</label>
                </div>
                <div>
                    <input name='Без пересадок' type="checkbox"/>
                    <label htmlFor="Без пересадок">Без пересадок</label>

                </div>
                <div>
                    <input name='1 пересадка' type="checkbox"/>
                    <label htmlFor="1 пересадка">1 пересадка</label>
                </div>
                <div>
                    <input name='2 пересадки' type="checkbox"/>
                    <label htmlFor="2 пересадки">2 пересадки</label>
                </div>
                <div>
                    <input name='3 пересадки' type="checkbox"/>
                    <label htmlFor="3 пересадки">3 пересадки</label>
                </div>
            </form>
        </div>
    )
}

export default FilterTransolantants