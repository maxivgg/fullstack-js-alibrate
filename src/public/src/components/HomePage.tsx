import styles from "../styles/login.module.css";

const HomePage: React.FunctionComponent = () => {
  
  const onSignOut = () => {
    localStorage.removeItem("token");
    return window.location.href = "/";
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-md-center m-1 text-center">
        <div className="col-12 mt-5">
          <img
            src="https://cdn.alibrate.com/images/AlibrateLogo.svg"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <div className="row mt-5">
          <div className="col">
            <button
              className={`btn text-white ${styles.bgBlue}`}
              onClick={onSignOut}
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
