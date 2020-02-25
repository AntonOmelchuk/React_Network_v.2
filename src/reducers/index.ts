import {combineReducers} from 'redux';
import {profileReducer} from './profileReducer';
import {dialogsReducer} from './dialogsReducer';
import {usersReducer} from './usersReducer';
import {authReducer} from './authReducer';
import {appReducer} from './appReducer';
import {reducer as formReducer} from 'redux-form';

export const rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
