import { Dispatch } from "redux";
import {
  myLibraryActionTypes,
  FETCH_MY_LIBRARY,
  LOADING_MY_LIBRARY,
} from "../types";
import { requestPost } from "../utils/request";
import { URL } from "../utils/configs";

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
        });
      })
      .catch((error) => {
        if (error.message === "jwt expired") {
          localStorage.removeItem("token");
        }
        console.log(error);
      });
  };
