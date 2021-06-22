import { UserState, UserActionTypes, LOGIN_USER, LOADING_USER } from "../types";

export const initialState: UserState = {
  user: null,
  jwt: null,
  isLogged: false,
  isLoading: false,
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER:
      return {
        ...state,
        jwt: action.payload.jwt,
        isLogged: true,
      };
    default:
      return state;
  }
}
