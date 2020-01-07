import {authTypes} from './types';
import {authAPI} from '../api/api';

export const setAuth = () => async dispatch => {
    try {
        const response = await authAPI.setAuth();

        if(response.data.resultCode === 0) {
            dispatch({
                type: authTypes.SET_AUTH,
                payload: response.data.data
            });
        }
    } catch(err) {
        console.log(err);
    }
};

export const login = (email, password, rememberMe) => async dispatch => {
    try {
        await authAPI.login(email, password, rememberMe);

        dispatch(setAuth());
    } catch(err) {

    }
};

export const logout = () => async dispatch => {
    try {
        await authAPI.logout();

        dispatch({type: authTypes.LOGOUT});
    } catch(err) {
        console.log(err);
    }
};