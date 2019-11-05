import {ADD_POST, DELETE_POST, SET_PROFILE, TOGGLE_LIKED} from './types';
import axios from 'axios';

export const setProfile = id => async dispatch => {
    try {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`);

        dispatch({type: SET_PROFILE, payload: response.data})
    } catch(err) {

    }
};

export const addPost = post => ({type: ADD_POST, payload: post});

export const deletePost = id => ({type: DELETE_POST, payload: id});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});
