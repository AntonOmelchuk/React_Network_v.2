import {INITIALIZED_SUCCESS} from './types';
import {setAuth} from './authActions';
import {InitializedType} from './actionCreatorTypes'

export const initialized = (): InitializedType => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => async (dispatch: any) => {
    try {
        await dispatch(setAuth());

        dispatch(initialized());
    } catch(err) {

    }
};