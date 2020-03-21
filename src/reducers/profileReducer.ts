import {profileTypes} from '../actions/types';

import ava1 from '../assets/avatars/ava1.jpg';
import ava2 from '../assets/avatars/ava2.jpg';
import ava3 from '../assets/avatars/ava3.jpg';
import ava4 from '../assets/avatars/ava4.jpg';

type InitialStateType = {
    profile: null | ProfileType,
    status: null | string,
    posts: Array<PostType>,
    isFetching: boolean
}

const initialState: InitialStateType = {
    profile: null,
    status: '',
    posts: [
        {id: 1, ava: ava1, text: `Just do it`, likes: 12, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 2, ava: ava2, text: 'What about Node?', likes: 1, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 3, ava: ava3, text: `Did you watch React conf?`, likes: 4, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 4, ava: ava4, text: `I watch 'Silicon Valley`, likes: 3, date: 'Mon Nov 04 2019 11:42:46', liked: false}
    ],
    isFetching: false
};

export const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case profileTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };
        case profileTypes.GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case profileTypes.UPDATE_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case profileTypes.ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case profileTypes.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case profileTypes.TOGGLE_LIKED:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload) {
                        if(!post.liked) {
                            post.likes++;
                        } else {
                            post.likes--;
                        }
                        post.liked = !post.liked;
                    }
                    return post;
                })
            };
        case profileTypes.TOGGLE_PROFILE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        case profileTypes.SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload} as ProfileType
            };
        }
        default:
            return state;
    }
};
