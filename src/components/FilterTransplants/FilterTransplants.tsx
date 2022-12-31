import React from 'react';
import './FilterTransplants.scss'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {IFilterState} from "../../redux/types/filter";

const FilterTransplants = () => {

    const {toggleInput, allStateHandler} = useActions()
    const filterState = useTypedSelector(state => state.filter);

    let countFalse = 0
    for (let key in filterState) {
        let value = key as keyof IFilterState
        if (value !== 'priceTimeFilter') {
            if (!filterState[value]) {
                countFalse += 1
            }
        }
    }

    if (filterState.all && countFalse === 1) {
        toggleInput('all')
    }
    if (!filterState.all && countFalse === 1) {
        toggleInput('all')
    }

    //  Не получилось описать event
    const handler = (e: any): void => {
        if (e.target.name === 'all') {
            allStateHandler()
        } else {
            toggleInput(e.target.name)
        }

    }


    return (
        <div className='filterTransplantsForm'>
            <h3>Количество пересадок</h3>
            <form className='filterTransplantsForm__form' action="">
                <div>
                    <input checked={filterState.all}
                           name='all'
                           type="checkbox"
                           onChange={(e) => handler(e)}
                    />
                    <label htmlFor="Все">Все</label>
                </div>
                <div>
                    <input checked={filterState.without}
                           name='without'
                           type="checkbox"
                           onChange={(e) => handler(e)}
                    />
                    <label htmlFor="Без пересадок">Без пересадок</label>

                </div>
                <div>
                    <input checked={filterState.oneTransplant}
                           name='oneTransplant'
                           type="checkbox"
                           onChange={(e) => handler(e)}
                    />
                    <label htmlFor="1 пересадка">1 пересадка</label>
                </div>
                <div>
                    <input checked={filterState.twoTransplant}
                           name='twoTransplant'
                           type="checkbox"
                           onChange={(e) => handler(e)}
                    />
                    <label htmlFor="2 пересадки">2 пересадки</label>
                </div>
                <div>
                    <input checked={filterState.threeTransplant}
                           name='threeTransplant'
                           type="checkbox"
                           onChange={(e) => handler(e)}
                    />
                    <label htmlFor="3 пересадки">3 пересадки</label>
                </div>
            </form>
        </div>
    )
}

export default FilterTransplants