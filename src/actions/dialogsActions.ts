import { dialogsAPI } from '../api/api';
import {
  dialogsTypes,
  DialogsThunksTypes,
  GetDialogsSuccessActionType,
  GetMessageSuccessActionType,
  SendMessageSuccessActionType,
  SetCurrentIdActionType,
  SetCurrentUserActionType,
  ToggleIsLoadingActionType,
  ToggleShowModalActionType,
  ToggleShowSendMessageSuccessModalActionType
} from "./types";

export const toggleIsLoading = (value: boolean): ToggleIsLoadingActionType => ({
  type: dialogsTypes.TOGGLE_IS_LOADING,
  payload: value,
});

export const setCurrentId = (id: number): SetCurrentIdActionType => ({
  type: dialogsTypes.SET_CURRENT_ID,
  payload: id,
});

export const getDialogsSuccess = (
  data: Array<DialogType>
): GetDialogsSuccessActionType => ({
  type: dialogsTypes.GET_DIALOGS_SUCCESS,
  payload: data,
});

export const getMessagesSuccess = (
  data: Array<MessageType>
): GetMessageSuccessActionType => ({
  type: dialogsTypes.GET_MESSAGES_SUCCESS,
  payload: data,
});

export const sendMessageSuccess = (
  message: MessageType
): SendMessageSuccessActionType => ({
  type: dialogsTypes.SEND_MESSAGE_SUCCESS,
  payload: message,
});

export const toggleShowModal = (isShow: boolean): ToggleShowModalActionType => {
  return {
    type: dialogsTypes.TOGGLE_SHOW_MODAL,
    payload: isShow
  }
};

export const setCurrentUser = (
  user: NewDialogUserType
): SetCurrentUserActionType => ({
  type: dialogsTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleShowSendMessageSuccessModal = (isShow: boolean): ToggleShowSendMessageSuccessModalActionType => ({
  type: dialogsTypes.TOGGLE_SHOW_SENT_MESSAGE_SUCCESS_MODAL,
  payload: isShow
});

export const getDialogs = (): DialogsThunksTypes => async dispatch => {
  try {
    dispatch(toggleIsLoading(true));
    const response = await dialogsAPI.getDialogs();
    dispatch(toggleIsLoading(false));
    if (response.status === 200) {
      dispatch(getDialogsSuccess(response.data));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getMessages = (
  userId: number
): DialogsThunksTypes => async dispatch => {
  try {
    const response = await dialogsAPI.getMessages(userId);
    dispatch(setCurrentId(userId));
    if (response.status === 200) {
      dispatch(getMessagesSuccess(response.data.items));
    }
  } catch (err) {
    console.log(err);
  }
};

export const sendMessage = (
  userId: number,
  message: string,
  fromModal = false
): DialogsThunksTypes => async dispatch => {
  debugger;
  try {
    const response = await dialogsAPI.sendMessage(userId, message);
    if (response.status === 200) {
      if (fromModal) {
        dispatch(toggleShowSendMessageSuccessModal(true));
        setTimeout(() => dispatch(toggleShowSendMessageSuccessModal(false)), 5400);
      }
      dispatch(sendMessageSuccess(response.data.data.message));
    }
  } catch (err) {
    console.log(err);
  }
};

export const getInitDialogs = (id: number): DialogsThunksTypes => async (
  dispatch,
  getState
) => {
  try {
    await dispatch(getDialogs());
    const state = await getState();
    const currentId = id || state.dialogs.dialogs[0].id;
    await dispatch(setCurrentId(currentId));
    await dispatch(getMessages(currentId));
  } catch (err) {
    console.log(err);
  }
};

export const startNewDialog = (
  user: NewDialogUserType
): DialogsThunksTypes => async dispatch => {
  dispatch(toggleShowModal(true));
  dispatch(setCurrentUser(user));
};

export const deleteMessages = (
  messages: Array<string>,
  userId: number
): DialogsThunksTypes => async dispatch => {
  try {
    await messages.map(id => dialogsAPI.deleteMessage(id));

    dispatch(getMessages(userId));
  } catch (err) {
    console.log(err);
  }
};
