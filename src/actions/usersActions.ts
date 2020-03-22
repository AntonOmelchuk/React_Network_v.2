import {
  usersTypes,
  ToggleDisableButtonType,
  GetUsersSuccessType,
  SetCurrentPageActionType,
  UsersThunksTypes,
  UsersToggleFetchingActionType,
} from './types';
import { usersAPI } from '../api/api';

const getUsersSuccess = (data: {
  items: Array<UserType>;
  totalCount: number;
}): GetUsersSuccessType => ({
  type: usersTypes.GET_USERS,
  payload: {
    users: data.items,
    totalCount: data.totalCount,
  },
});

const toggleDisableButton = (
  id: number,
  status: boolean
): ToggleDisableButtonType => ({
  type: usersTypes.TOGGLE_DISABLE_BUTTON,
  payload: {
    id,
    status: status,
  },
});

export const getUsers = (page: number): UsersThunksTypes => async dispatch => {
  try {
    const response = await usersAPI.getUser(page);

    dispatch(getUsersSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const toggleFetching = (
  value: boolean
): UsersToggleFetchingActionType => ({
  type: usersTypes.TOGGLE_FETCHING,
  payload: value,
});

export const setCurrentPage = (page: number): SetCurrentPageActionType => ({
  type: usersTypes.SET_CURRENT_PAGE,
  payload: page,
});

export const followUser = (id: number): UsersThunksTypes => async dispatch => {
  try {
    dispatch(toggleDisableButton(id, true));
    const response = await usersAPI.followUser(id);

    if (response.data.resultCode === 0) {
      dispatch({ type: usersTypes.TOGGLE_FOLLOWING, payload: id });
      dispatch(toggleDisableButton(id, false));
    }
  } catch (err) {
    console.log(err);
  }
};

export const unFollowUser = (
  id: number
): UsersThunksTypes => async dispatch => {
  try {
    dispatch(toggleDisableButton(id, true));
    const response = await usersAPI.unFollowUser(id);

    if (response.data.resultCode === 0) {
      dispatch({ type: usersTypes.TOGGLE_FOLLOWING, payload: id });
      dispatch(toggleDisableButton(id, false));
    }
  } catch (err) {
    console.log(err);
  }
};
