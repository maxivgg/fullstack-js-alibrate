import styles from "../styles/nav.module.css";
import history from "../history";
import { FaPager, FaBook, FaAward, FaComment, FaFeatherAlt } from "react-icons/fa";

const NavigationButtons: React.FunctionComponent = () => {
  return (
    <nav
      className={`navbar d-flex navbar-dark fixed-bottom p-3 ${styles.navbar} d-block d-md-block d-lg-none`}
    >
      <FaPager className={styles.flLg} onClick={() => history.push("/")} />
      <FaBook
        className={styles.flLg}
        onClick={() => history.push("/mi-biblioteca")}
      />
      <FaAward className={styles.flLg} />
      <FaComment className={styles.flLg} />
      <FaFeatherAlt className={styles.flLg} />
    </nav>
  );
};

export default NavigationButtons;
