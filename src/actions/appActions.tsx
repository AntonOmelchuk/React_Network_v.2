// @ts-ignore
import {INITIALIZED_SUCCESS, InitializedSuccessAction} from './types';
import {setAuth} from './authActions';

export const initialized = (): InitializedSuccessAction => ({type: INITIALIZED_SUCCESS});

// @ts-ignore
export const initializeApp = (): Promise => async dispatch => {
    try {
        await dispatch(setAuth());

        dispatch(initialized());
    } catch(err) {

    }
}