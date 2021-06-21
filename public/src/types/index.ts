export const LOADING_USER = "LOADING_USER";
export const LOGIN_USER = "LOGIN_USER";

export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface UserState {
  user: User | null;
  jwt: String | null;
  isLogged: boolean;
  isLoading: boolean;
}

interface LoginAction {
  type: typeof LOGIN_USER;
  payload: User;
}

interface LoadingUser {
  type: typeof LOADING_USER;
  iLoading: boolean;
}

export type UserActionTypes = LoginAction | LoadingUser;
