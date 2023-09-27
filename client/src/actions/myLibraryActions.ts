import { Dispatch } from "redux";
import {
  myLibraryActionTypes,
  FETCH_MY_LIBRARY,
  LOADING_MY_LIBRARY,
  RESET_MY_LIBRARY,
} from "../types";
import { requestPost } from "../utils/request";
import { URL } from "../utils/configs";
import history from "../history";

interface FetchBooks {
  limit: number;
  page: number;
  status: string;
}

export const fetchBooks =
  (request: FetchBooks) => async (dispatch: Dispatch<myLibraryActionTypes>) => {
    dispatch({
      type: LOADING_MY_LIBRARY,
    });
    return requestPost(URL + "my-library", request)
      .then((data) => data.json())
      .then((response) => {
        dispatch({
          type: FETCH_MY_LIBRARY,
          payload: response,
          status: request.status,
        });
      })
      .catch((error) => {
        if (error.tokenError) {
          localStorage.removeItem("token");
          history.push("/login");
        }
        console.log(error);
      });
  };

export const resetState =
  () => async (dispatch: Dispatch<myLibraryActionTypes>) => {
    dispatch({
      type: RESET_MY_LIBRARY,
    });
  };
