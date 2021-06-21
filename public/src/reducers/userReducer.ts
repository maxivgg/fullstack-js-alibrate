import {
  UserState,
  UserActionTypes,
  LOGIN_USER,
} from "../types";

export const initialState: UserState = {
  user: null,
};

export function postReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
