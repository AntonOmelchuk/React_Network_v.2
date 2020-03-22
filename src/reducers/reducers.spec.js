import * as types from '../actions/types';
import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';

// ============= App reducer ===============

describe('App reducer', () => {
    const initialState = {
        isInitialized: false
    };

    it('INITIALIZED_SUCCESS', () => {
        const action = {
            type: types.INITIALIZED_SUCCESS
        };

        expect(appReducer(initialState, action)).toEqual({
            isInitialized: true
        });
    });
});

// ============= Auth reducer ===============

describe('Auth reducer', () => {
    const initialState = {
        id: null,
        email: null,
        login: null,
        isAuth: false
    };

    it('SET_AUTH', () => {
        const action = {
            type: types.SET_AUTH,
            payload: null
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            ...action.payload,
            isAuth: true
        });
    });
    it('LOGOUT', () => {
        const action = {
            type: types.LOGOUT
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            id: null,
            email: null,
            login: null,
            isAuth: false
        });
    });
});

// ============= Dialogs reducer ===============

describe('Dialogs reducer', () => {
    const initialState = {
        dialogs: [
            {
                id: 3, user: test, lastMessage: 'test', yourLast: false, isRead: true, messages: [
                    { id: 3, isYour: false, text: 'test' }
                ]
            },
        ],
        current:  {
            id: 3, user: test, lastMessage: 'test', yourLast: false, isRead: true, messages: [
                { id: 3, isYour: false, text: 'test' }
            ]
        },
    };
    
    it('SET_CURRENT_DIALOG', () => {
        const action = {
            type: types.SET_CURRENT_DIALOG,
            payload: 'test'
        };

        expect(dialogsReducer(initialState, action)).toEqual({
            ...initialState,
            current: action.payload
        });
    });
    it('SEND_MESSAGE', () => {
        const action = {
            type: types.SEND_MESSAGE,
            payload: 'test message'
        };

        expect(dialogsReducer(initialState, action)).toEqual({
            ...initialState,
            current: { ...initialState.current, messages: [...initialState.current.messages, action.payload] }
        });
    });
});

// ============= Profile reducer ===============

describe('Profile reducer', () => {
    const initialState = {
        profile: null,
        status: null,
        posts: [
            { id: 3, ava: 'test', text: 'test', likes: 12, date: 'Mon Nov 04 2019 11:42:46', liked: false }
        ],
        isFetching: false
    };

    it('SET_PROFILE', () => {
        const action = {
            type: types.SET_PROFILE,
            payload: 'test user'
        };
        
        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            profile: action.payload
        });
    });
    it('GET_STATUS', () => {
        const action = {
            type: types.GET_STATUS,
            payload: 'test'
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            status: action.payload
        });
    });
    it('UPDATE_STATUS', () => {
        const action = {
            type: types.UPDATE_STATUS,
            payload: 'test status'
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            status: action.payload
        });
    });
    it('ADD_POST', () => {
        const action = {
            type: types.ADD_POST,
            payload: 'test post'
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: [...initialState.posts, action.payload]
        });
    });
    it('DELETE_POST', () => {
        const action = {
            type: types.DELETE_POST,
            payload: 3
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: initialState.posts.filter(post => post.id !== action.payload)
        });
    });
    it('TOGGLE_LIKED', () => {
        const action = {
            type: types.TOGGLE_LIKED,
            payload: 3
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            posts: initialState.posts.map(post => {
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
        });
    });
    it('TOGGLE_PROFILE_FETCHING', () => {
        const action = {
            type: types.TOGGLE_PROFILE_FETCHING
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: !initialState.isFetching
        });
    });
    it('SET_PHOTO', () => {
        const action = {
            type: types.SET_PHOTO,
            payload: 'test photo'
        };

        expect(profileReducer(initialState, action)).toEqual({
            ...initialState,
            profile: { ...initialState.profile, photos: action.payload }
        });
    });
});

// ============= User reducer ===============

describe('User reducer', () => {
    const initialState = {
        users: [],
        totalCount: null,
        currentPage: 1,
        pageSize: 10,
        isFetching: false,
        disabledButton: []
    };

    it('GET_USERS', () => {
        const action = {
            type: types.GET_USERS,
            payload: {
                users: null,
                totalCount: null
            }
        };

        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            users: action.payload.users,
            totalCount: action.payload.totalCount,
            isFetching: false
        });
    });
    it('TOGGLE_FETCHING', () => {
        const action = {
            type: types.TOGGLE_FETCHING
        };

        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            isFetching: true
        });
    });
    it('SET_CURRENT_PAGE', () => {
        const action = {
            type: types.SET_CURRENT_PAGE,
            payload: null
        };

        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            currentPage: action.payload
        });
    });
    it('TOGGLE_FOLLOWING', () => {
        const action = {
            type: types.TOGGLE_FOLLOWING,
            payload: 3
        };

        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            users: initialState.users.map(user => {
                if(user.id === action.payload) {
                    return { ...user, followed: !user.followed };
                } else {
                    return user;
                }
            })
        });
    });
    it('DISABLE_BUTTON', () => {
        const action = {
            type: types.DISABLE_BUTTON,
            payload: {
                status: 'test',
                id: 3
            }
        };

        expect(usersReducer(initialState, action)).toEqual({
            ...initialState,
            disabledButton: action.payload.status
                ? [...initialState.disabledButton, action.payload.id]
                : [initialState.disabledButton.filter(id => id !== action.payload.id)]
        });
    });
});
