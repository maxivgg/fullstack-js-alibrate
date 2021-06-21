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
}

interface LoginAction {
  type: typeof LOGIN_USER;
  payload: User;
}

export type UserActionTypes = LoginAction;
