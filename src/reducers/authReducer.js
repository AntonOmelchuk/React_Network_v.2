import {authTypes} from '../actions/types';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case authTypes.SET_AUTH:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            };
        default:
            return state;
    }
};