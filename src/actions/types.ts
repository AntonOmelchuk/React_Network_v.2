// === App types === //

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export interface InitializedSuccessActionType {
    type: typeof INITIALIZED_SUCCESS
}

// === Profile types === //

export const profileTypes = {
    SET_PROFILE: 'SET_PROFILE',
    ADD_POST: 'ADD_POST',
    DELETE_POST: 'DELETE_POST',
    TOGGLE_LIKED: 'TOGGLE_LIKED',
    GET_STATUS: 'GET_STATUS',
    UPDATE_STATUS: 'UPDATE_STATUS',
    TOGGLE_PROFILE_FETCHING: 'TOGGLE_PROFILE_FETCHING',
    SET_PHOTO: 'SET_PHOTO'
};

export type AddPostActionType = {
    type: typeof profileTypes.ADD_POST,
    payload: PostType
}

export type DeletePostActionType = {
    type: typeof profileTypes.DELETE_POST,
    payload: number
}

export type ToggleLikedActionType = {
    type: typeof profileTypes.TOGGLE_LIKED,
    payload: number
}

export type ToggleFetchingActionType = {
    type: typeof profileTypes.TOGGLE_PROFILE_FETCHING
}

export type SetPhotoActionType = {
    type: typeof profileTypes.SET_PHOTO,
    payload: PhotosType
}

// === Dialogs types === //

export const dialogsTypes = {
    SEND_MESSAGE_SUCCESS: 'SEND_MESSAGE_SUCCESS',
    GET_DIALOGS_SUCCESS: 'GET_DIALOGS_SUCCESS',
    GET_MESSAGES_SUCCESS: 'GET_MESSAGES_SUCCESS',
    TOGGLE_IS_LOADING: 'TOGGLE_IS_LOADING',
    SET_CURRENT_ID: 'SET_CURRENT_ID',
    TOGGLE_SHOW_MODAL: 'TOGGLE_SHOW_MODAL',
    SET_CURRENT_USER: 'SET_CURRENT_USER',
    SHOW_SENT_MESSAGE_SUCCESS_MODAL: 'SHOW_SENT_MESSAGE_SUCCESS_MODAL',
    HIDE_SENT_MESSAGE_SUCCESS_MODAL: 'HIDE_SENT_MESSAGE_SUCCESS_MODAL',
    DELETE_MESSAGES: 'DELETE_MESSAGES'
};

export type ToggleIsLoadingActionType = {
    type: typeof dialogsTypes.TOGGLE_IS_LOADING
    payload: boolean
}

export type SetCurrentIdActionType = {
    type: typeof dialogsTypes.SET_CURRENT_ID
    payload: number
}

export type GetDialogsSuccessActionType = {
    type: typeof dialogsTypes.GET_DIALOGS_SUCCESS
    payload: Array<DialogType>
}

export type SendMessageSuccessActionType = {
    type: typeof dialogsTypes.SEND_MESSAGE_SUCCESS
    payload: MessageType
}

export type GetMessageSuccessActionType = {
    type: typeof dialogsTypes.GET_MESSAGES_SUCCESS
    payload: Array<MessageType>
}

export type ToggleShowModalActionType = {
    type: typeof dialogsTypes.TOGGLE_SHOW_MODAL
}

export type SetCurrentUserActionType = {
    type: typeof dialogsTypes.SET_CURRENT_USER
    payload: NewDialogUserType
}

export type ShowSendMessageSuccessModalActionType = {
    type: typeof dialogsTypes.SHOW_SENT_MESSAGE_SUCCESS_MODAL
}

export type HideSendMessageSuccessModalActionType = {
    type: typeof dialogsTypes.HIDE_SENT_MESSAGE_SUCCESS_MODAL
}

// === Users types === //

export const usersTypes = {
    GET_USERS: 'GET_USERS',
    TOGGLE_FOLLOWING: 'TOGGLE_FOLLOWING',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    TOGGLE_FETCHING: 'TOGGLE_FETCHING',
    DISABLE_BUTTON: 'DISABLE_BUTTON'
};

export type UsersToggleFetchingActionType = {
    type: typeof usersTypes.TOGGLE_FETCHING
    payload: boolean
}

export type SetCurrentPageActionType = {
    type: typeof usersTypes.SET_CURRENT_PAGE
    payload: number
}

// === Auth types === //

export const authTypes = {
    SET_AUTH: 'SET_AUTH',
    LOGOUT: 'LOGOUT'
};

export type SetAuthActionType = {
    type: typeof authTypes.SET_AUTH,
    payload: any
}

