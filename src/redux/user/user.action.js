import { UserActionTypes } from './user.types';
export const setCuurentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
