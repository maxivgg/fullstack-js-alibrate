import styles from "../styles/nav.module.css";
import { FaRegBell } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark mb-3 ${styles.navbar}`}>
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
          <div className="mt-1">
            <FaRegBell className={styles.flLg} />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a href="/" className="navbar-brand">
            <img
              src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg"
              alt="logo"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Mi biblioteca
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Salir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
