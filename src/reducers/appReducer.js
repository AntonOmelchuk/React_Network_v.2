import {INITIALIZED_SUCCESS} from '../actions/types';

const initialState = {
    isInitialized: false
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state
    }
};