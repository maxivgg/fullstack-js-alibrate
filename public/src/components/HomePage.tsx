import { useDispatch } from "react-redux";
import styles from "../styles/login.module.css";
import history from "../history";
import { signout } from "../actions/userActions";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div className="container ">
      <div className="row justify-content-md-center m-1 text-center">
        <div className="col-12 mt-5">
          <img
            src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <div className="row mt-5">
          <div className="col">
            <button
              className="btn btn-light"
              onClick={() => history.push("/mi-biblioteca")}
            >
              Mi biblioteca
            </button>
          </div>
          <div className="col">
            {" "}
            <button
              className="btn btn-light"
              onClick={() => dispatch(signout())}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;