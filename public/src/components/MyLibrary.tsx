import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../actions/myLibraryActions";
import { RootState } from "../reducers";
import styles from "../styles/myLibrary.module.css";
import { Book as BookType } from "../types";
import Book from "./Book";
import MyLibraryNavStatus from "./MyLibraryNavStatus";

const MyLibrary = () => {
  const isLoading = useSelector(
    (state: RootState) => state.myLibrary.isLoading
  );
  const books = useSelector(
    (state: RootState) => state.myLibrary.booksMyLibrary
  );

  const dispatch = useDispatch();
  const limit = 10;
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("booksRead");

  useEffect(() => {
    dispatch(fetchBooks({ page, limit, status }));
  }, [page, limit, status, dispatch]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col-md-3 mb-3">
          <div className="card"> Usuario</div>
        </div>
        <div className="col-md-9 mb-3">
          <MyLibraryNavStatus status={status} setStatus={setStatus} />
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {!isLoading ? (
              books?.length > 0 &&
              books.map((item: BookType, index: number) => (
                <Book key={index} book={item} />
              ))
            ) : (
              <div className="container">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
