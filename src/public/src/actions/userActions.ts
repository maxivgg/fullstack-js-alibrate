import { Dispatch } from "redux";
import { UserActionTypes, LOGIN_USER, LOADING_USER } from "../types";
import history from "../history";
import { requestPost } from "../utils/request";
import { URL } from "../utils/configs";

interface SignIn {
  username: string;
  password: string;
  redirect: string;
}

export const signIn =
  (request: SignIn) => async (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({
      type: LOADING_USER,
    });
    return requestPost(URL + "auth/signIn", request)
      .then((data) => data.json())
      .then((response) => {
        if(response.token) localStorage.setItem("token", response.token);
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

export const signOut = () => {
  localStorage.removeItem("token");
  return history.push("/");
};
