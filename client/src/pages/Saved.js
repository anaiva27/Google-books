import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import API from "../utils/API";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    showSaved();
  }, []);

  function showSaved() {
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteBook(id) {
    for (let i = 0; i < books.length; i++) {
      if (id === books[i]._id) {
          console.log(books)
          console.log( books[i]._id)
        API.deleteBook(books[i]._id)
          .then((res) => showSaved())
          .catch((err) => console.log(err));
      }
    }
  }

  return (
    <div>
      {books.length ? (
        <div>
          <h3>Saved Books:</h3>
          {books.map((book) => {
            return (
              <Card
                title={book.title}
                author={book.authors}
                link={book.link}
                description={book.description}
                image={book.image}
                key={book.id}
                googleId={book.id}
                handleDeleteBook={handleDeleteBook}
              />
            );
          })}
        </div>
      ) : (
        <h3>Saved Books:</h3>
      )}
    </div>
  );
}

export default Saved;
