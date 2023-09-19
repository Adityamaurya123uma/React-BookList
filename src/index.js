import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  return (
    <>
      <h1>amazon best seller</h1>
      <div className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<BookList />);
