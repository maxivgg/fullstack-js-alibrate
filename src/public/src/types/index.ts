export const LOADING_USER = "LOADING_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOADING_MY_LIBRARY = "LOADING_MY_LIBRARY";
export const FETCH_MY_LIBRARY = "FETCH_MY_LIBRARY";

export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}
export interface Book {
  _id: string;
  title: string;
  isbn13: string;
  genre: string;
  description: string;
  cover: string;
  author: string;
}

export interface UserState {
  user: User | null;
  jwt: String | null;
  isLogged: boolean;
  isLoading: boolean;
}

export interface myLibraryState {
  isLoading: boolean,
  booksMyLibrary: Book[]
}

interface LoginAction {
  type: typeof LOGIN_USER;
  payload: {
    jwt: string
  };
}

interface LoadingUser {
  type: typeof LOADING_USER;
}

interface FetchMyLibrary {
  type: typeof FETCH_MY_LIBRARY;
  payload: {
    booksMyLibrary: Book[]
  };
}

interface LoadingMyLibrary {
  type: typeof LOADING_MY_LIBRARY;
}

export type UserActionTypes = LoginAction | LoadingUser;

export type myLibraryActionTypes = FetchMyLibrary | LoadingMyLibrary;
