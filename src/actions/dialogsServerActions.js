import {dialogsAPI} from '../api/api';
import {
    GET_DIALOGS_SUCCESS,
    GET_MESSAGES_SUCCESS,
    SEND_MESSAGE_SUCCESS,
    SET_CURRENT_ID,
    TOGGLE_IS_LOADING
} from './types';

export const toggleIsLoading = value => ({
    type: TOGGLE_IS_LOADING,
    payload: value
});

export const setCurrentId = id => ({
    type: SET_CURRENT_ID,
    payload: id
});

const getDialogsSuccess = data => ({
    type: GET_DIALOGS_SUCCESS,
    payload: data
});

const getMessagesSuccess = data => ({
    type: GET_MESSAGES_SUCCESS,
    payload: data
});

const sendMessageSuccess = message => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: message
});

export const getDialogs = () => async dispatch => {
    try {
        dispatch(toggleIsLoading(true));
        const response = await dialogsAPI.getDialogs();
        dispatch(toggleIsLoading(false));
        if(response.status === 200) {
            dispatch(getDialogsSuccess(response.data));
        }
    } catch(err) {
        console.log(err);
    }
};

export const getMessages = userId => async dispatch => {
    try {
        dispatch(toggleIsLoading(true));
        const response = await dialogsAPI.getMessages(userId);
        dispatch(toggleIsLoading(false));
        if(response.status === 200) {
            dispatch(getMessagesSuccess(response.data.items));
        }
    } catch(err) {
        console.log(err);
    }
};

export const sendMessage = (userId, message) => async dispatch => {
    try {
        const response = await dialogsAPI.sendMessage(userId, message);
        if(response.status === 200) {
            dispatch(sendMessageSuccess(response.data.data.message));
        }

    } catch(err) {
        console.log(err);
    }
};

export const getInitDialogs = id => async (dispatch, getState) => {
    try {
        await dispatch(getDialogs());
        const state = await getState();
        const currentId = id || state.dialogsServer.dialogs[0].id;
        dispatch(setCurrentId(currentId));
        dispatch(getMessages(currentId));
    } catch(err) {
        console.log(err);
    }
};