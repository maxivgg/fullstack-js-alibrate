import React, { CSSProperties } from "react";
import styles from "../styles/myLibrary.module.css";
import { User } from "../types";

interface Props {
  status: string;
  setStatus: React.Dispatch<
    React.SetStateAction<
      "booksRead" | "booksReading" | "booksWishlist" | "booksAbandoned"
    >
  >;
  user: User | null;
}

const MyLibraryNavStatus: React.FunctionComponent<Props> = (props) => {
  const { status, setStatus, user } = props;

  const booksRead = user?.booksRead?.length || 0;
  const booksReading = user?.booksReading?.length || 0;
  const booksWishlist = user?.booksWishlist?.length || 0;
  const booksAbandoned = user?.booksAbandoned?.length || 0;

  const styleActive: CSSProperties = {
    borderBottom: "solid 4px #1c4865",
  };

  return (
    <div className={`d-flex justify-content-end mb-3`}>
          <button
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksRead")}
            style={status === "booksRead" ? styleActive : {}}
          >
            Leídos {booksRead > 0 && `(${booksRead})`}
          </button>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksReading")}
            style={status === "booksReading" ? styleActive : {}}
          >
            Leyendo {booksReading > 0 && `(${booksReading})`}
          </span>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksWishlist")}
            style={status === "booksWishlist" ? styleActive : {}}
          >
            Por leer {booksWishlist > 0 && `(${booksWishlist})`}
          </span>
          <span
            className={`btn btn-link ${styles.btnLink}`}
            onClick={() => setStatus("booksAbandoned")}
            style={status === "booksAbandoned" ? styleActive : {}}
          >
            Abandonados {booksAbandoned > 0 && `(${booksAbandoned})`}
          </span>
    </div>
  );
};

export default MyLibraryNavStatus;
