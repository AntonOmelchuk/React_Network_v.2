import {createSelector} from 'reselect';

const dialogsState = state => state.dialogs;

export const selectDialogs = createSelector(
    [dialogsState],
    dialogs => dialogs.dialogs
);

export const selectMessages = createSelector(
    [dialogsState],
    dialogs => dialogs.messages
);

export const selectIsLoading = createSelector(
    [dialogsState],
    dialogs => dialogs.isLoading
);

export const selectCurrentId = createSelector(
    [dialogsState],
    dialogs => dialogs.currentId
);