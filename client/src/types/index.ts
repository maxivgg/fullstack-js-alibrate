export const LOADING_USER = "LOADING_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOADING_MY_LIBRARY = "LOADING_MY_LIBRARY";
export const FETCH_MY_LIBRARY = "FETCH_MY_LIBRARY";
export const RESET_MY_LIBRARY = "RESET_MY_LIBRARY";

export interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
  booksRead: string[];
  booksReading: string[];
  booksWishlist: string[];
  booksAbandoned: string[];
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
  isLoading: boolean;
}

export interface myLibraryState {
  isLoading: boolean;
  booksMyLibrary: any;
  user: User | any;
}

interface LoginAction {
  type: typeof LOGIN_USER;
  payload: {
    token: string;
    user: User;
  };
}

interface LoadingUser {
  type: typeof LOADING_USER;
}

interface ResetMyLibrary {
  type: typeof RESET_MY_LIBRARY;
}

interface FetchMyLibrary {
  type: typeof FETCH_MY_LIBRARY;
  payload: {
    user: User;
    booksMyLibrary: Book[];
  };
  status: string;
}

interface LoadingMyLibrary {
  type: typeof LOADING_MY_LIBRARY;
}

export type UserActionTypes = LoginAction | LoadingUser;

export type myLibraryActionTypes =
  | FetchMyLibrary
  | LoadingMyLibrary
  | ResetMyLibrary;
