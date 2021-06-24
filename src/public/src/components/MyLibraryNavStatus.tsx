import React, { CSSProperties } from "react";
import styles from "../styles/myLibrary.module.css";

interface Props {
  status: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>,
}

const MyLibraryNavStatus: React.FunctionComponent<Props> = (props) => {
  const { status, setStatus } = props;

  const styleActive: CSSProperties = {
    borderBottom: "solid 4px #1c4865",
  };

  return (
    <div className={`text-white mb-3 ${styles.navStatus}`}>
      <ul className="nav justify-content-end">
        <li>
          <button
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksRead")}
            style={status === "booksRead" ? styleActive : {}}
          >
            Leídos
          </button>
        </li>
        <li>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksReading")}
            style={status === "booksReading" ? styleActive : {}}
          >
            Leyendo
          </span>
        </li>
        <li>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksWishlist")}
            style={status === "booksWishlist" ? styleActive : {}}
          >
            Por leer
          </span>
        </li>
        <li>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksAbandoned")}
            style={status === "booksAbandoned" ? styleActive : {}}
          >
            Abandonados
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MyLibraryNavStatus;
