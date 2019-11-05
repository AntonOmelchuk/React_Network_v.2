import {GET_USERS, SET_CURRENT_PAGE, TOGGLE_FETCHING, TOGGLE_FOLLOWING} from './types';
import axios from 'axios';
import style from '../components/Users/Users.module.css';
import React from 'react';

export const getUsers = (page) => async dispatch => {
    try {

        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}`);
        dispatch({type: GET_USERS, payload: {
            users: response.data.items,
            totalCount: response.data.totalCount
        }});
    } catch(err) {

    }
};

export const toggleFetching = value => ({type: TOGGLE_FETCHING, payload: value});

export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page});

export const toggleFollowing = id => ({type: TOGGLE_FOLLOWING, payload: id});

