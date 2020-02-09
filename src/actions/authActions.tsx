// @ts-ignore
import {authTypes} from './types';
// @ts-ignore
import {authAPI} from '../api/api';
// @ts-ignore
import {SetAuthAction} from './types';

// @ts-ignore
export const setAuth = () => async (dispatch: (arg0: { type: any; payload: any; }) => void): Promise<SetAuthAction> => {
    try {
        const response = await authAPI.setAuth();

        if(response.data.resultCode === 0) {
            dispatch({
                type: authTypes.SET_AUTH,
                payload: response.data.data
            });
        }
    } catch(err) {
        console.log(err);
    }
};

export const login = (email: string, password: number, rememberMe: boolean) => async (dispatch: (arg0: (dispatch: (arg0: { type: any; payload: any; }) => void) => any) => void) => {
    try {
        await authAPI.login(email, password, rememberMe);

        dispatch(setAuth());
    } catch(err) {

    }
};

export const logout = () => async (dispatch: (arg0: { type: any; }) => void) => {
    try {
        await authAPI.logout();

        dispatch({type: authTypes.LOGOUT});
    } catch(err) {
        console.log(err);
    }
};