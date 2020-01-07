import {appTypes} from '../actions/types';
import {setAuth} from './authActions';

export const initialized = () => ({type: appTypes.INITIALIZED_SUCCESS});

export const initializeApp = () => async dispatch => {
    try {
        await dispatch(setAuth());

        dispatch(initialized());
    } catch(err) {

    }
};