import { useState } from "react";
import styles from "../styles/login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();
    alert(username);
  };

  return (
    <div className="row justify-content-md-center m-1">
      <div className={`${styles.formLogin} col-md-6 shadow-sm`}>
        <h4>Inicia sesión</h4>
        <form onSubmit={handleSubmit} className="col-md-6 w-100 mb-2">
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
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-light block">
              INICIAR SESION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
