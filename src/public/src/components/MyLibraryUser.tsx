import React from "react";
import styles from "../styles/myLibrary.module.css";
import { User } from "../types";

interface Props {
  user: User | null;
}

const MyLibraryNavStatus: React.FunctionComponent<Props> = (props) => {
  const { user } = props;
  const booksRead = user?.booksRead?.length || 0;
  const booksReading = user?.booksReading?.length || 0;
  const booksWishlist = user?.booksWishlist?.length || 0;
  const booksAbandoned = user?.booksAbandoned?.length || 0;

  const booksQuantity =
    booksRead + booksReading + booksWishlist + booksAbandoned;
  return (
    <div className="container">
      <div className="row row-cols-3 mb-2">
        <div className="col-3">
          <img
            src={user?.avatar}
            width="75"
            className="rounded-circle"
            alt={user?.name}
          />
        </div>
        <div className="col-5">
          <h4>{user?.username}</h4>
          <p className={styles.fontSize12}>Editar géneros favoritos</p>
        </div>
        <div className="col-4">
          <button className="btn btn-outline-dark btn-sm">
            <small>Invitar amigos</small>
          </button>
        </div>
      </div>
      <div className="col-12">
        <div className="user-data d-flex justify-content-between">
          <span className="text-center">
            <span className="violet inline pointer ng-binding">
              {booksQuantity}
              <p className="block grey">Libros</p>
            </span>
          </span>
          <span className="text-center">
            <span
              ui-sref="my-reviews"
              className="violet inline pointer ng-binding"
            >
              0<p className="block grey">Reseñas</p>
            </span>
          </span>
          <span className="text-center">
            <span
              ui-sref="people.followers"
              className="violet inline pointer ng-binding"
            >
              0<p className="block grey">Seguidores</p>
            </span>
          </span>
          <span className="text-center">
            <span
              ui-sref="people.following"
              className="violet inline pointer ng-binding"
            >
              0<p className="block grey">Seguidos</p>
            </span>
          </span>
          <span className="text-center">
            <span ui-sref="my-lists" className="violet inline pointer ng-binding">
              0<p className="block grey">Listas</p>
            </span>
          </span>
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex justify-content-between">
          <button className={`btn rounded-pill shadow text-dark ${styles.fontSize11}`}>Mis eBooks</button>
          <button className={`btn rounded-pill shadow text-dark ${styles.fontSize11}`}>Mis textos</button>
          <button className={`btn rounded-pill shadow text-dark ${styles.fontSize11}`}>Mis citas</button>
          <button className={`btn rounded-pill shadow text-dark ${styles.fontSize11}`}>Reto de lectura</button>
        </div>
      </div>
    </div>
  );
};

export default MyLibraryNavStatus;
