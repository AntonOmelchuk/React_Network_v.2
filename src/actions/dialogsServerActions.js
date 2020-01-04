import {dialogsAPI} from '../api/api';
import {GET_DIALOGS_SUCCESS, GET_MESSAGES_SUCCESS, TOGGLE_IS_LOADING} from './types';

export const toggleIsLoading = value => ({
    type: TOGGLE_IS_LOADING,
    payload: value
});

const getDialogsSuccess = data => ({
    type: GET_DIALOGS_SUCCESS,
    payload: data
});

const getMessagesSuccess = data => ({
    type: GET_MESSAGES_SUCCESS,
    payload: data
});

export const getDialogs = () => async dispatch => {
    try {
        dispatch(toggleIsLoading(true));
        const response = await dialogsAPI.getDialogs();
        dispatch(toggleIsLoading(false));
        dispatch(getDialogsSuccess(response.data));
    } catch(err) {
        console.log(err);
    }
};

export const getMessages = userId => async dispatch => {
    try {
        dispatch(toggleIsLoading(true));
        const response = await dialogsAPI.getMessages(userId);
        dispatch(toggleIsLoading(false));
        dispatch(getMessagesSuccess(response.data.items));
    } catch(err) {
        console.log(err);
    }
};

export const sendMessage = (userId, message) => async dispatch => {
    const response = await dialogsAPI.sendMessage(userId, message);
};