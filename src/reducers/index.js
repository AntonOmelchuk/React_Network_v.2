import {combineReducers} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './appReducer';

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
