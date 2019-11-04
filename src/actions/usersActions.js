import {TOGGLE_FOLLOWING} from './types';

export const toggleFollowing = id => ({type: TOGGLE_FOLLOWING, payload: id});