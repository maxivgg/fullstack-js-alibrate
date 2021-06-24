import styles from "../styles/nav.module.css";
import history from "../history";
import { FaPager, FaBook, FaAward, FaComment, FaSearch } from "react-icons/fa";

const NavigationButtons: React.FunctionComponent = () => {
  return (
    <nav
      className={`navbar navbar-collapse navbar-dark fixed-bottom p-3 ${styles.navbar}`}
    >
      <FaPager className={styles.flLg} onClick={() => history.push("/")} />
      <FaBook
        className={styles.flLg}
        onClick={() => history.push("/mi-biblioteca")}
      />
      <FaAward className={styles.flLg} />
      <FaComment className={styles.flLg} />
      <FaSearch className={styles.flLg} />
    </nav>
  );
};

export default NavigationButtons;
