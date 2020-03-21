import {dialogsAPI} from '../api/api';
import {
    dialogsTypes,
    GetDialogsSuccessActionType,
    GetMessageSuccessActionType,
    HideSendMessageSuccessModalActionType,
    SendMessageSuccessActionType,
    SetCurrentIdActionType,
    SetCurrentUserActionType,
    ShowSendMessageSuccessModalActionType,
    ToggleIsLoadingActionType,
    ToggleShowModalActionType
} from './types';

export const toggleIsLoading = (value: boolean): ToggleIsLoadingActionType => ({
    type: dialogsTypes.TOGGLE_IS_LOADING,
    payload: value
});

export const setCurrentId = (id: number): SetCurrentIdActionType => ({
    type: dialogsTypes.SET_CURRENT_ID,
    payload: id
});

export const getDialogsSuccess = (data: Array<DialogType>): GetDialogsSuccessActionType => ({
    type: dialogsTypes.GET_DIALOGS_SUCCESS,
    payload: data
});

export const getMessagesSuccess = (data: Array<MessageType>): GetMessageSuccessActionType => ({
    type: dialogsTypes.GET_MESSAGES_SUCCESS,
    payload: data
});

export const sendMessageSuccess = (message: MessageType): SendMessageSuccessActionType => ({
    type: dialogsTypes.SEND_MESSAGE_SUCCESS,
    payload: message
});

export const toggleShowModal = (): ToggleShowModalActionType => ({type: dialogsTypes.TOGGLE_SHOW_MODAL});

export const setCurrentUser = (user: NewDialogUserType): SetCurrentUserActionType => ({
    type: dialogsTypes.SET_CURRENT_USER,
    payload: user
});

export const showSendMessageSuccessModal = (): ShowSendMessageSuccessModalActionType => ({type: dialogsTypes.SHOW_SENT_MESSAGE_SUCCESS_MODAL});
export const hideSendMessageSuccessModal = (): HideSendMessageSuccessModalActionType => ({type: dialogsTypes.HIDE_SENT_MESSAGE_SUCCESS_MODAL});

export const getDialogs = () => async (dispatch: any) => {
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

export const getMessages = (userId: number) => async (dispatch: any) => {
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

export const sendMessage = (userId: number, message: string, fromModal = false) => async (dispatch: any) => {
    try {
        const response = await dialogsAPI.sendMessage(userId, message);
        if(response.status === 200) {
            if(fromModal) {
                dispatch(showSendMessageSuccessModal());
                setTimeout(() => dispatch(hideSendMessageSuccessModal()), 5400);
            }
            dispatch(sendMessageSuccess(response.data.data.message));
        }
    } catch(err) {
        console.log(err);
    }
};

export const getInitDialogs = (id: number) => async (dispatch: any, getState: any) => {
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

export const startNewDialog = (user: NewDialogUserType) => async (dispatch: any) => {
    dispatch(toggleShowModal());
    dispatch(setCurrentUser(user));
};

export const deleteMessages = (messages: Array<string>, userId: number) => async (dispatch: any) => {
    try {
        await messages.map(id => dialogsAPI.deleteMessage(id));

        dispatch(getMessages(userId));
    } catch(err) {
        console.log(err);
    }
};
