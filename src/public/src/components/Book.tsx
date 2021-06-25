import styles from "../styles/myLibrary.module.css";
import { FaStar } from "react-icons/fa";
import { Book as BookTypes } from "../types/index";

interface Props {
  book: BookTypes;
}

const Book: React.FunctionComponent<Props> = (props) => {
  const { book } = props;
  return (
    <div className="col">
      <div className="card">
        <article className="row">
          <div className="col-4">
            <img
              className={`${styles.bookCover} rounded`}
              alt={`${book.title} - ${book.author}`}
              title={`${book.title} | Descubre tu libro en Alibrate`}
              src={`https://covers.alibrate.com/${book.cover}/medium`}
            />
          </div>
          <div className="col-8">
            <div className={styles.text}>
              <small className={styles.gray}>{book.genre}</small>
              <h4>{book.title.substring(0, 48)}</h4>
              <small>{book.author}</small>
            </div>
            <FaStar className={styles.flXl} />
            <FaStar className={styles.flXl} />
            <FaStar className={styles.flXl} />
            <FaStar className={styles.flXl} />
            <FaStar className={styles.flXl} />
            <p>
              <small className={styles.gray}>
                Calificación general: <span className={styles.blue}>8,3</span>
              </small>
            </p>
            <div className="btn-group dropdown-hover">
              <button
                type="button"
                className={`btn ${styles.blue} ${styles.btnGhostViolet}`}
              >
                Leído
              </button>
              <button
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                className={`btn dropdown-toggle text-white ${styles.bgBlue}`}
              >
                <i className="fl-chevron-bottom"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li>
                  <span>Por leer</span>
                </li>
                <li>
                  <span>Leyendo</span>
                </li>
                <li>
                  <span>Leído</span>
                </li>
                <li>
                  <span>Abandonado</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Book;
