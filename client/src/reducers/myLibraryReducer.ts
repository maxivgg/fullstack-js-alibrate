import {
  myLibraryState,
  myLibraryActionTypes,
  FETCH_MY_LIBRARY,
  LOADING_MY_LIBRARY,
  RESET_MY_LIBRARY,
} from "../types";

export const initialState: myLibraryState = {
  isLoading: false,
  user: null,
  booksMyLibrary: {
    booksRead: [],
    booksReading: [],
    booksWishlist: [],
    booksAbandoned: [],
  },
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
        booksMyLibrary: {
          ...state.booksMyLibrary,
          [action.status]: [
            ...state.booksMyLibrary[action.status],
            ...action.payload.booksMyLibrary,
          ],
        },
        user: action.payload.user,
        isLoading: false,
      };

    case RESET_MY_LIBRARY:
      return initialState;
    default:
      return state;
  }
}
