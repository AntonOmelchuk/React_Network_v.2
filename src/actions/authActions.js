import axios from 'axios';
import {SET_AUTH} from './types';

export const setAuth = () => async dispatch => {
    try {
        const response = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true});

        if(response.data.resultCode === 0) {
            dispatch({
                type: SET_AUTH,
                payload: response.data.data
            })
        }
    } catch(err) {

    }
};