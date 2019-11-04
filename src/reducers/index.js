import {combineReducers} from 'redux'
import {profileReducer} from './profileReducer'
import {dialogsReducer} from './dialogsReducer'

export const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer
});
