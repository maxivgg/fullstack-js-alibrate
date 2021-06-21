import { Dispatch } from "redux";
import axios from "axios";
import {
  UserActionTypes,
  LOGIN_USER,
  LOADING_USER
} from "../types";

const URL =
  window.location.hostname === "localhost"
    ? "http://localhost:2000/"
    : "https://https://fullstack-js-alibrate.herokuapp.com//";

export const signin = (request) => async (dispatch: Dispatch<UserActionTypes>) => {
  dispatch({
    type: LOADING_USER,
  });
  await axios
    .get(URL + "api/shop")
    .then((response) =>
      dispatch({
        type: LOGIN_USER,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};
