import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../actions/myLibraryActions";
import { RootState } from "../reducers";
import { Book as BookType } from "../types";
import Book from "./Book";

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
  const [status, setStatus] = useState("read");

  useEffect(() => {
    dispatch(fetchBooks({ page, limit, status }));
  }, [page, limit, status, dispatch]);

  return !isLoading ? (
    <div className="container">
      {books?.length > 0 &&
        books.map((item: BookType, index: number) => (
          <Book key={index} book={item} />
        ))}
    </div>
  ) : (
    <div className="container">Loading...</div>
  );
};

export default MyLibrary;
