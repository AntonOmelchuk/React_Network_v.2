import ava1 from '../assets/avatars/ava1.jpg'
import ava2 from '../assets/avatars/ava2.jpg'
import ava3 from '../assets/avatars/ava3.jpg'
import ava4 from '../assets/avatars/ava4.jpg'
import {SEND_MESSAGE, SET_CURRENT_DIALOG} from '../actions/types';

const initialState = {
    dialogs: [
        {
            id: 1, user: ava1, lastMessage: 'okay', yourLast: false, isRead: false, messages: [
                {isYour: false, text: `what's happen?`},
                {isYour: true, text: 'I have some problem'},
                {isYour: true, text: 'can you help me?'},
                {isYour: false, text: 'okay'}
            ]
        },
        {
            id: 2, user: ava2, lastMessage: 'see you later', yourLast: true, isRead: false, messages: [
                {isYour: false, text: 'so, what do you think about that?'},
                {isYour: true, text: 'I can do it'},
                {isYour: true, text: 'see you later'},
            ]
        },
        {
            id: 3, user: ava3, lastMessage: 'great)', yourLast: true, isRead: true, messages: [
                {isYour: true, text: `How are you feeling?)`},
                {isYour: false, text: 'I did it)'},
                {isYour: true, text: 'great'}
            ]
        },
        {
            id: 4, user: ava4, lastMessage: 'good for you', yourLast: true, isRead: false, messages: [
                {isYour: true, text: 'Hi)'},
                {isYour: true, text: `what's new?`},
                {isYour: false, text: 'you can congratulate me)))'},
                {isYour: false, text: 'I found a job'},
                {isYour: true, text: 'good for you!)'}
            ]
        }
    ],
    current: null
};

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_DIALOG:
            return {
                ...state,
                current: action.payload
            };
        case SEND_MESSAGE:
            return {
                ...state,
                current: {...state.current, messages: [...state.current.messages, action.payload]}
            };
        default:
            return state
    }
};