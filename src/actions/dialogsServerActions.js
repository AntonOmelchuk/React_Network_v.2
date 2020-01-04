import {dialogsAPI} from '../api/api';
import {GET_DIALOGS_SUCCESS, TOGGLE_IS_LOADING} from './types';

export const toggleIsLoading = () => ({type: TOGGLE_IS_LOADING});

const getDialogsSuccess = data => ({
    type: GET_DIALOGS_SUCCESS,
    payload: data
});

export const getDialogs = () => async dispatch => {
    dispatch(toggleIsLoading());
    const response = await dialogsAPI.getMessages();
    dispatch(toggleIsLoading());
    if(response.status === 200) {
        dispatch(getDialogsSuccess(response.data));
    }
};

export const sendMessage = (userId = 300, message) => async dispatch => {
    const response = await dialogsAPI.sendMessage(userId, message);
};