import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { signin } from "../actions/userActions";
import styles from "../styles/login.module.css";

type TParams = { redirect: string };

const Login = () => {
  const { redirect } = useParams<TParams>();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();
    dispatch(signin({ username, password, redirect }));
  };

  return (
    <div className={styles.header}>
      <div className={`container`}>
        <div className="row justify-content-md-center m-1 text-center">
          <div className="col-12 mt-5">
            <img
              src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
              alt="Logo"
              className={styles.logo}
            />
          </div>
          <div className={`${styles.formLogin} col-md-6 col-lg-4 mt-5`}>
            <div className="text-left">
              <h5>Inicia sesión</h5>
            </div>
            <form onSubmit={handleSubmit} className="mb-2">
              <div className="col-12 w-100 mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa usuario o email"
                  value={username}
                  onChange={(element) => setUsername(element.target.value)}
                />
              </div>
              <div className="col-12 w-100 mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrersa tu contraseña"
                  value={password}
                  onChange={(element) => setPassword(element.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mb-2">
                <button
                  type="submit"
                  disabled={username && password ? false : true}
                  style={{ backgroundColor: "#1c4865" }}
                  className="btn btn-lg block text-white fs-6"
                >
                  INICIAR SESION
                </button>
                <span className="btn btn-link">
                  <b>¿Olvidaste tu constraseña?</b>
                </span>
              </div>
              <div className="row g-3">
                <div className="col-4">
                  <hr className="w-100" />
                </div>
                <div className="col-4">
                  <span>o ingresá con</span>
                </div>
                <div className="col-4">
                  <hr className="w-100" />
                </div>
              </div>
              <div className="d-grid gap-2 mb-2">
                <span className="btn btn-primary btn-lg block">
                  <b>Facebook</b>
                </span>
              </div>
            </form>
            <div className="g-2 mt-3 mb-3">
              Aún no tienes cuenta?{" "}
              <span className="btn-link">
                <b>Registrate</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
