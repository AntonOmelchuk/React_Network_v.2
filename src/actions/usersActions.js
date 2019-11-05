import {GET_USERS, SET_CURRENT_PAGE, TOGGLE_FETCHING, TOGGLE_FOLLOWING} from './types';
import axios from 'axios';

export const getUsers = (page) => async dispatch => {
    try {

        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`,
            {withCredentials: true});
        dispatch({type: GET_USERS, payload: {
            users: response.data.items,
            totalCount: response.data.totalCount
        }});
    } catch(err) {

    }
};

export const toggleFetching = value => ({type: TOGGLE_FETCHING, payload: value});

export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page});

export const followUser = id => async dispatch => {
    try {
        const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
                }
            });

        debugger
        if(response.data.resultCode === 0) {
            dispatch({type: TOGGLE_FOLLOWING, payload: id})
        }
    } catch(err) {

    }
};

export const unFollowUser = id => async dispatch => {
    try {
        const response = await axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': 'cc9f7e6f-c96d-4eb2-97ef-b9ab9495f033'
                }
            });
        debugger
        if(response.data.resultCode === 0) {
            dispatch({type: TOGGLE_FOLLOWING, payload: id})
        }
    } catch(err) {

    }
};




