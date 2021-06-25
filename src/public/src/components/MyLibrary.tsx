import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, resetState } from "../actions/myLibraryActions";
import { RootState } from "../reducers";
import styles from "../styles/myLibrary.module.css";
import { Book as BookType } from "../types";
import Book from "./Book";
import MyLibraryNavStatus from "./MyLibraryNavStatus";
import MyLibraryUser from "./MyLibraryUser";

const limit = 10;
const pageInitial = 1;

const MyLibrary: React.FunctionComponent = () => {
  const isLoading = useSelector(
    (state: RootState) => state.myLibrary.isLoading
  );
  const user = useSelector((state: RootState) => state.myLibrary.user);
  const dispatch = useDispatch();

  const [page, setPage] = useState(pageInitial);
  const [status, setStatus] = useState<
    "booksRead" | "booksReading" | "booksWishlist" | "booksAbandoned"
  >("booksRead");
  const [isBottom, setIsBottom] = useState(false);

  const books = useSelector(
    (state: RootState) => state.myLibrary.booksMyLibrary[status]
  );

  useEffect(() => {
    setPage(pageInitial);
  }, [status, dispatch]);

  useEffect(() => {
    if (isBottom && books.length < user[status].length) {
      setPage((page) => page + 1);
      setIsBottom(false);
    }
  }, [isBottom]);

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchBooks({ page, limit, status }));
    }
  }, [page, dispatch]);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) setIsBottom(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      dispatch(resetState());
    };
  }, [dispatch]);

  return (
    <div className={`container-fluid ${styles.mt6} ${styles.mb6}`}>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        <div className="col-md-3">
          <MyLibraryUser user={user} />
        </div>
        <div className="col-md-9">
          <MyLibraryNavStatus
            status={status}
            setStatus={setStatus}
            user={user}
          />
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {books?.length > 0 &&
              books.map((item: BookType, index: number) => (
                <Book key={index} book={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
