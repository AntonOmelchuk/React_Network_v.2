import {LOGOUT, SET_AUTH} from './types';
import {authAPI} from '../api/api';

export const setAuth = () => async dispatch => {
    try {
        const response = await authAPI.setAuth();

        if(response.data.resultCode === 0) {
            dispatch({
                type: SET_AUTH,
                payload: response.data.data
            })
        }
    } catch(err) {

    }
};

export const login = (email, password, rememberMe) => async dispatch => {
    try {
        await authAPI.login(email, password, rememberMe);

        dispatch(setAuth())
    } catch(err) {

    }
};

export const logout = () => async dispatch => {
    try {
        await authAPI.logout();

        dispatch({type: LOGOUT})
    } catch(err) {

    }
};