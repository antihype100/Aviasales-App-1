import {TOGGLE, TOGGLE_ALL_STATE} from "../types/filterTransplants";


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