import ava1 from '../assets/avatars/ava1.jpg'
import ava2 from '../assets/avatars/ava2.jpg'
import ava3 from '../assets/avatars/ava3.jpg'
import ava4 from '../assets/avatars/ava4.jpg'

const initialState = [
    {id: 1, user: ava1, lastMessage: 'okay', yourLast: false, isRead: false, messages:[
        {isYour: false, text: 'okay'},
        {isYour: true, text: 'can you help me?'},
        {isYour: true, text: 'I have some problem'},
        {isYour: false, text: `what's happen?`},
    ]},
    {id: 2, user: ava2, lastMessage: 'see you later', yourLast: true, isRead: true, messages:[
        {isYour: true, text: 'see you later'},
        {isYour: true, text: 'I can do it'},
        {isYour: false, text: 'so, what do you think about that?'}
    ]},
    {id: 3, user: ava3, lastMessage: 'great)', yourLast: true, isRead: true, messages:[
        {isYour: true, text: 'great'},
        {isYour: false, text: 'I did it)'},
        {isYour: true, text: `How are you feeling?)`}
    ]},
    {id: 4, user: ava4, lastMessage: 'not bad)', yourLast: false, isRead: false, messages:[
        {isYour: false, text: 'I found a job'},
        {isYour: false, text: 'you can congratulate me)))'},
        {isYour: true, text: `what's new?`},
        {isYour: true, text: 'Hi)'},
    ]}
];

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}