import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  // get saved books from DB
  useEffect(() => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [savedBooks]);

  // delete selected book by id
  function handleDeleteBook(id) {
    console.log(id);
    for (let i = 0; i < savedBooks.length; i++) {
      if (id === savedBooks[i]._id) {
        API.deleteBook(savedBooks[i]._id).then(
          API.getBooks()
            .then((res) => {
              setSavedBooks(res.data);
            })
            .catch((err) => console.log(err))
        );
      }
    }
  }

  return (
    <div className="container container-fluid" id="saved">
      {!savedBooks.length ? (
        <h1>Your saved books will appear down below:</h1>
      ) : (
        <div>
          <h2 className="mt-3">Your book selection:</h2>
          {savedBooks.map((savedBooks) => {
            return (
              <>
                <Card
                  title={savedBooks.title}
                  author={savedBooks.authors}
                  description={savedBooks.description}
                  image={savedBooks.image}
                  googleId={savedBooks._id}
                  link={savedBooks.link}
                  deleteFunc={handleDeleteBook}

                />
                <br />
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Saved;
