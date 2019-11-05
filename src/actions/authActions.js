import {SET_AUTH} from './types';
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