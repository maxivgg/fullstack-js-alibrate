import { Dispatch } from "redux";
import { UserActionTypes, LOGIN_USER, LOADING_USER } from "../types";
import history from "../history";
import { requestPost } from "../utils/request";
import { URL } from "../utils/configs";

interface Signin {
  username: string;
  password: string;
  redirect: string;
}

export const signin =
  (request: Signin) => async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
      type: LOADING_USER,
    });
    return requestPost(URL + "auth/signin", request)
      .then((data) => data.json())
      .then((response) => {
        localStorage.setItem("token", response.token);
        dispatch({
          type: LOGIN_USER,
          payload: response,
        });
      })
      .then(() =>
      window.location.href = "/mi-biblioteca"
      )
      .catch((error) => {
        console.log(error);
      });
  };

export const signout = () => {
  localStorage.removeItem("token");
  return history.push("/");
};
