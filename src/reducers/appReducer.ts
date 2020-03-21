import { AppActionTypes, INITIALIZED_SUCCESS } from "../actions/types";

export type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isInitialized: false
};

export const appReducer = (state = initialState, action: AppActionTypes): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            };
        default:
            return state;
    }
};
