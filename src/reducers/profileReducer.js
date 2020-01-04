import ava1 from '../assets/avatars/ava1.jpg';
import ava2 from '../assets/avatars/ava2.jpg';
import ava3 from '../assets/avatars/ava3.jpg';
import ava4 from '../assets/avatars/ava4.jpg';
import {
    ADD_POST,
    DELETE_POST,
    SET_PROFILE,
    TOGGLE_LIKED,
    GET_STATUS,
    UPDATE_STATUS,
    TOGGLE_PROFILE_FETCHING, SET_PHOTO
} from '../actions/types';

const initialState = {
    profile: null,
    status: null,
    posts: [
        {id: 1, ava: ava1, text: `Just do it`, likes: 12, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 2, ava: ava2, text: 'What about Node?', likes: 1, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 3, ava: ava3, text: `Did you watch React conf?`, likes: 4, date: 'Mon Nov 04 2019 11:42:46', liked: false},
        {id: 4, ava: ava4, text: `I watch 'Silicon Valley'`, likes: 3, date: 'Mon Nov 04 2019 11:42:46', liked: false}
    ],
    isFetching: false
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload
            };
        case GET_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case UPDATE_STATUS:
            return {
                ...state,
                status: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case TOGGLE_LIKED:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if(post.id === action.payload) {
                        if(post.liked === false) {
                            post.likes++;
                        } else {
                            post.likes--;
                        }
                        post.liked = !post.liked;
                    }
                    return post;
                })
            };
        case TOGGLE_PROFILE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        case SET_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload}
            };
        }
        default:
            return state;
    }
};
