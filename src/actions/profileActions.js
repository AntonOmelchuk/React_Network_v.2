import {ADD_POST, DELETE_POST, TOGGLE_LIKED} from './types';

export const addPost = post => ({type: ADD_POST, payload: post});

export const deletePost = id => ({type: DELETE_POST, payload: id});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});
