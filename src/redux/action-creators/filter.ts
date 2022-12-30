import {TOGGLE, TOGGLE_ALL_STATE, FILTER_BY_PRICE} from "../types/filter";


export const toggleInput = (name: string) => {
    return {
        type: TOGGLE,
        name
    }
}

export const allStateHandler = () => {

    return {
        type: TOGGLE_ALL_STATE
    }
}

export const setFilter = (name: string) =>  {
    return {
        type: FILTER_BY_PRICE,
        name
    }
}

