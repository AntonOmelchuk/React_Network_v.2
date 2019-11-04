import {SEND_MESSAGE, SET_CURRENT_DIALOG} from './types';

export const setCurrentDialog = dialog => ({type: SET_CURRENT_DIALOG, payload: dialog});

export const sendMessage = messageObj => ({type: SEND_MESSAGE, payload: messageObj});