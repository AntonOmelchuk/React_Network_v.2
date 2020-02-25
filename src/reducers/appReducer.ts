import { INITIALIZED_SUCCESS } from '../actions/types';
import {AppActionsType} from '../actions/actionCreatorTypes'

type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isInitialized: false
};

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};