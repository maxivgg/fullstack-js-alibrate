import styles from "../styles/nav.module.css";
import {
  FaBell,
} from "react-icons/fa";
import NavigationButtons from "./NavigationButtons";

const Navigation: React.FunctionComponent = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbar}`}
    >
      <div className="container">
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
        <div className="d-flex justify-content-start">
          <input
            className={`form-control me-2 ${styles.search}`}
            placeholder="Buscar lectores y libros (título o autor)"
          />
          <span className={`nav-link ${styles.linkResults}`}>
            Búsqueda avanzada
          </span>
          <div className="mt-2">
            <FaBell className={styles.flLg} />
          </div>
        </div>
        <div
          className="collapse navbar-expanded-lg"
          id="navbarSupportedContent"
        >
          <a href="/" className="navbar-brand">
            <img
              src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
              alt="logo"
              width="150px"
            />
          </a>
          <NavigationButtons />
        </div>
        <NavigationButtons />
      </div>
    </nav>
  );
};

export default Navigation;
