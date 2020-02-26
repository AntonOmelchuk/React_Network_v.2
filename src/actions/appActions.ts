import {INITIALIZED_SUCCESS} from './types';
import {setAuth} from './authActions';
import {InitializedType, AppThunkActionsType} from './actionCreatorTypes'

export const initialized = (): InitializedType => ({type: INITIALIZED_SUCCESS});


export const initializeApp = (): AppThunkActionsType => async dispatch => {
    try {
        await dispatch(setAuth());

        dispatch(initialized());
    } catch(err) {

    }
};