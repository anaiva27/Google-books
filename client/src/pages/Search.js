import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card";

export default function Search() {
  //API Key HIDE IN PROCESS.ENV???
  const API_KEY = "AIzaSyDEqWOaZeHGCKfBxPOsQpRE5nwMILRZeIE";

  //States
  const [bookSearch, setBookSearch] = useState([]);
  const [userInput, setuserInput] = useState([]);

  // function setSearched(data) {
  //   setBooksearch(data.items);
  // }

  useEffect(() => {
    let URL = `https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${API_KEY}`;
    API.googleSearch(URL)
      .then((res) => {
        console.log("*******", res);
        setBookSearch(res.data.items);
        //empty input
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userInput]);

  function handleFormSubmit(event) {
    event.preventDefault();
    const userInput = document.querySelector("#search").value.trim();
    setuserInput(userInput);
  }

  function handleSaveBook(id) {
    for (let i = 0; i < bookSearch.length; i++) {
      if (id === bookSearch[i].id) {
        console.log(bookSearch[i].id);
        API.saveBook({
          title: bookSearch[i].volumeInfo.title,
          authors: bookSearch[i].volumeInfo.authors,
          link: bookSearch[i].volumeInfo.infoLink,
          description: bookSearch[i].volumeInfo.description,
          image: bookSearch[i].volumeInfo.imageLinks,
          googleId: bookSearch[i].id,
        })
          .then(() => {
            console.log("The book has been saved!");
          })
          .catch((err) => console.log(err));
      }
    }
  }

  const renderCards = () => {
    let mappedSearch = null;
    if (bookSearch.length > 0) {
      mappedSearch = bookSearch.map((search) => {
        console.log(search.volumeInfo.authors);
        return (
          <>
            <Card
              title={search.volumeInfo.title}
              author={search.volumeInfo.authors}
              link={search.volumeInfo.infoLink}
              description={search.volumeInfo.description}
              image={search.volumeInfo.imageLinks}
              key={search.id}
              googleId={search.id}
              handleSaveBook={handleSaveBook}
            />
          </>
        );
      });
    }

    return mappedSearch;
  };

  return (
    <>
      <div className="container container-fluid bg-dark text-white p-3 mb-2 ">
        <h3>Search For a Book</h3>
        <div className="input-group mb-3">
  <input type="text"  id="search" className="form-control" aria-label="Enter the name of the book"/>
  <div className="input-group-append">
    <span  onClick={handleFormSubmit} className=" btn btn-outline-secondary btn-link">Submit</span>
  </div>
</div>
        {/* <input type="text" id="search" />
        <button type="submit" onClick={handleFormSubmit} className=" btn btn-outline-secondary ">
          Submit
        </button> */}
      </div>
      <br />
      <div className="container container-fluid">
        <h3>Results:</h3>
        <div>{renderCards()}</div>
      </div>
    </>
  );
}
