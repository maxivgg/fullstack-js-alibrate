import styles from "../styles/myLibrary.module.css";

const Book = (props) => {
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
            <small>{book.title}</small>
            <h4>{book.title}</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Book;
