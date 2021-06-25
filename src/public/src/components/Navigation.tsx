import styles from "../styles/nav.module.css";
import {
  FaAward,
  FaBell,
  FaBook,
  FaComment,
  FaPager,
  FaFeatherAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import NavigationButtons from "./NavigationButtons";
import history from "../history";

const Navigation: React.FunctionComponent = () => {
  const onSignOut = () => {
    localStorage.removeItem("token");
    return (window.location.href = "/");
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbar}`}
    >
      <div className="container-fluid">
        <a href="/" className="collapse navbar-collapse">
          <img
            src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
            alt="logo"
            height="30px"
          />
        </a>
        <button
          className={`navbar-toggler ${styles.navbarToggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-flex justify-content-between">
          <input
            className={`form-control form-control-sm me-2 ${styles.search}`}
            placeholder="Buscar"
          />
          <span className={`nav-link ${styles.linkResults}`}>
            Búsqueda avanzada
          </span>
          <div className="mt-2">
            <FaBell className={styles.flLg} />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <FaPager
                className={styles.flLg}
                onClick={() => history.push("/")}
              />
            </li>
            <li className="nav-item">
              <FaBook
                className={styles.flLg}
                onClick={() => history.push("/mi-biblioteca")}
              />
            </li>
            <FaAward className={styles.flLg} />
            <li className="nav-item">
              <FaComment className={styles.flLg} />
            </li>
            <li className="nav-item">
              <FaFeatherAlt className={styles.flLg} />
            </li>
            <li className="nav-item">
              <FaSignOutAlt className={styles.flLg} onClick={onSignOut} />
            </li>
          </ul>
        </div>
        <NavigationButtons />
      </div>
    </nav>
  );
};

export default Navigation;
