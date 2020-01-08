import {dialogsAPI} from '../api/api';
import {dialogsTypes} from './types';


export const toggleIsLoading = value => ({
    type: dialogsTypes.TOGGLE_IS_LOADING,
    payload: value
});

export const setCurrentId = id => ({
    type: dialogsTypes.SET_CURRENT_ID,
    payload: id
});

export const getDialogsSuccess = data => ({
    type: dialogsTypes.GET_DIALOGS_SUCCESS,
    payload: data
});

export const getMessagesSuccess = data => ({
    type: dialogsTypes.GET_MESSAGES_SUCCESS,
    payload: data
});

export const sendMessageSuccess = message => ({
    type: dialogsTypes.SEND_MESSAGE_SUCCESS,
    payload: message
});

export const toggleShowModal = () => ({type: dialogsTypes.TOGGLE_SHOW_MODAL});

export const setCurrentUser = user => ({
    type: dialogsTypes.SET_CURRENT_USER,
    payload: user
});

export const showSendMessageSuccessModal = () => ({type: dialogsTypes.SHOW_SENT_MESSAGE_SUCCESS_MODAL});
export const hideSendMessageSuccessModal = () => ({type: dialogsTypes.HIDE_SENT_MESSAGE_SUCCESS_MODAL});

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
        const response = await dialogsAPI.getMessages(userId);
        dispatch(setCurrentId(userId));
        if(response.status === 200) {
            dispatch(getMessagesSuccess(response.data.items));
        }
    } catch(err) {
        console.log(err);
    }
};

export const sendMessage = (userId, message, fromModal = false) => async dispatch => {
    // try {
    //         const response = await dialogsAPI.sendMessage(userId, message);
    //         if(response.status === 200) {
    if(fromModal) {
        console.log(userId, message, fromModal);
        dispatch(showSendMessageSuccessModal());
        setTimeout(() => dispatch(hideSendMessageSuccessModal()), 5400);
    }
    //         dispatch(sendMessageSuccess(response.data.data.message));
    //     }
    // } catch(err) {
    //     console.log(err);
    // }
};

export const getInitDialogs = id => async (dispatch, getState) => {
    try {
        await dispatch(getDialogs());
        const state = await getState();
        const currentId = id || state.dialogs.dialogs[0].id;
        dispatch(setCurrentId(currentId));
        dispatch(getMessages(currentId));
    } catch(err) {
        console.log(err);
    }
};

export const startNewDialog = user => async dispatch => {
    dispatch(toggleShowModal());
    dispatch(setCurrentUser(user));
};