import {GET_USERS, TOGGLE_FOLLOWING} from './types';
import axios from 'axios';

export const getUsers = () => async dispatch => {
    try {
        const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users');
        dispatch({type: GET_USERS, payload: response.data.items})
    } catch(err) {

    }

};

export const toggleFollowing = id => ({type: TOGGLE_FOLLOWING, payload: id});