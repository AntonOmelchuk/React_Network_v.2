import {appTypes} from '../actions/types';

const initialState = {
    isInitialized: false
};

export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case appTypes.INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};