import {combineReducers} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer';

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer
});
