import React from 'react';
import './FilterTransplants.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    toggleInput,
    allStateHandler,
} from "../../redux/action-creators/filterTransplants";

// @ts-ignore
const FilterTransplants = () => {

    const dispatch = useDispatch()
    const filterState: any = useSelector<any>(state => state.filter);
    let countFalse = 0
    for (let key in filterState) {
        if (!filterState[key]) {
            countFalse += 1
        }
    }
    if (filterState.all && countFalse == 1) {
        dispatch(toggleInput('all'))
    }
    if (!filterState.all && countFalse == 1) {
        dispatch(toggleInput('all'))
    }


    const handler = (e: any): void => {
        if (e.target.name === 'all') {
            dispatch(allStateHandler())
        } else {
            dispatch(toggleInput(e.target.name))
            console.log()
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