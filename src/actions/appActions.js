import {INITIALIZED_SUCCESS} from '../actions/types';
import {setAuth} from './authActions';

export const initialized = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async dispatch => {
    try {
        await dispatch(setAuth());

        dispatch(initialized());
    } catch(err) {

    }
};