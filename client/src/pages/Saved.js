import React, { useState, useEffect } from "react";
import Card from "../components/Card";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

 async function handleDeleteBook(id) {
    console.log(id);
    for await (let book of savedBooks) {
      if (id === book._id) {
        API.deleteBook(book._id).then(
          API.getBooks()
            .then((res) => {
              setSavedBooks(res.data);
            })
            .catch((err) => console.log(err))
        );
      }
    }
  }

  // get saved books from DB
  // useEffect(() => {
    API.getBooks()
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => console.log(err));
  // }, []);

  // delete selected book by id
 

  return (
    <div className="container container-fluid" id="saved">
      {!savedBooks.length ? (
        <h1>Your saved books will appear down below:</h1>
      ) : (
        <div>
          <h2 className="mt-3">Your book selection:</h2>
          {savedBooks.map((savedBooks) => {
            return (
  
                <Card
                  title={savedBooks.title}
                  author={savedBooks.authors}
                  description={savedBooks.description}
                  image={savedBooks.image}
                  key={savedBooks._id}
                  googleId={savedBooks._id}
                  link={savedBooks.link}
                  deleteFunc={handleDeleteBook}
                />
    
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Saved;
