import {ADD_POST, TOGGLE_LIKED} from './types';

export const addPost = post => ({type: ADD_POST, payload: post});

export const toggleLiked = id => ({type: TOGGLE_LIKED, payload: id});
