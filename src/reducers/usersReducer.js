import ava1 from '../assets/avatars/ava1.jpg'
import ava2 from '../assets/avatars/ava2.jpg'
import ava3 from '../assets/avatars/ava3.jpg'
import ava4 from '../assets/avatars/ava4.jpg'
import {TOGGLE_FOLLOWING} from '../actions/types';

const initialState = {
    users: [
        {id: 1, avatar: ava1, name: 'Richard', follow: true},
        {id: 2, avatar: ava2, name: 'Roberts', follow: true},
        {id: 3, avatar: ava3, name: 'Sheeva', follow: true},
        {id: 4, avatar: ava4, name: 'Nate', follow: true}
    ]
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {...user, follow: !user.follow}
                    } else {
                        return user
                    }
                })
            };
        default:
            return state
    }
};