import {
  myLibraryState,
  myLibraryActionTypes,
  FETCH_MY_LIBRARY,
  LOADING_MY_LIBRARY,
} from "../types";

export const initialState: myLibraryState = {
  isLoading: false,
  booksMyLibrary: [],
};

export function myLibraryReducer(
  state = initialState,
  action: myLibraryActionTypes
): myLibraryState {
  switch (action.type) {
    case LOADING_MY_LIBRARY:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MY_LIBRARY:
      return {
        ...state,
        booksMyLibrary: action.payload.booksMyLibrary,
        isLoading: false,
      };
    default:
      return state;
  }
}
