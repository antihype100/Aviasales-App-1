export enum FilterActionsType {
    TOGGLE = 'TOGGLE',
    TOGGLE_ALL_STATE = 'TOGGLE_ALL_STATE',
    FILTER_BY_PRICE = 'FILTER_BY_PRICE',
}

export interface IFilterState {
    all: boolean,
    without: boolean,
    oneTransplant: boolean,
    twoTransplant: boolean,
    threeTransplant: boolean,
    priceTimeFilter: string,
}

interface IToggleInput {
    type: FilterActionsType.TOGGLE,
    payload: keyof IFilterState
}

interface IAllStateHandler  {
    type: FilterActionsType.TOGGLE_ALL_STATE
}

interface ISetFilter  {
    type: FilterActionsType.FILTER_BY_PRICE,
    payload: string
}

export type FilterActions = IToggleInput | IAllStateHandler | ISetFilter