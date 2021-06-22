import React from "react";

function Book(props) {
  const { book } = props;
  return <div className="text-white">{book.title}</div>;
}

export default Book;
