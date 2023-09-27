import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { signIn } from "../actions/userActions";
import styles from "../styles/login.module.css";

type TParams = { redirect: string };

const Login: React.FunctionComponent = () => {
  const { redirect } = useParams<TParams>();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (element: any) => {
    element.preventDefault();
    dispatch(signIn({ username, password, redirect }));
  };

  return <div className="container">
    <div className="row justify-content-md-center m-1 text-center">
      <div className={`${styles.formLogin} col-md-6 col-lg-4`}>
        <div className="text-left mt-3 mb-3">
          <h1>My Library</h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="col-12 w-100 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter username or email (maxi)"
              value={username}
              onChange={(element) => setUsername(element.target.value)}
            />
          </div>
          <div className="col-12 w-100 mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password (maxi)"
              value={password}
              onChange={(element) => setPassword(element.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button
              type="submit"
              disabled={!username || !password}
              style={{ backgroundColor: "#1c4865" }}
              className="btn btn-lg block text-white fs-6"
            >
              Log in
            </button>
            <span className="btn btn-link">
              <b>Forgot your password?</b>
            </span>
          </div>
        </form>
        <div className="g-2 mt-3 mb-3">
          You don't have an account yet?{" "}
          <span className="btn-link">
            <b>Sign up</b>
          </span>
        </div>
      </div>
    </div>
  </div>
};

export default Login;
