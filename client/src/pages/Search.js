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
  
      // const userInput = document.querySelector("#search").value.trim();
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
    setuserInput(userInput)
  }

  const renderCards = () => {
    let mappedSearch = null;
    if (bookSearch.length > 0) {
      mappedSearch = bookSearch.map((search) => {
        console.log(search.volumeInfo.authors)
        return (
          <Card
            title={search.volumeInfo.title}
            author={search.volumeInfo.authors}
            link={search.volumeInfo.infoLink}
            description={search.volumeInfo.description}
            image={search.volumeInfo.imageLinks}
           key={search.id}
          />
        );
      });
    }

    return mappedSearch;
  };

  return (
    <>
      <form>
        <h3>Search For a Book</h3>
        <input type="text" id="search" />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

      <h3>Results</h3>
      <div>{renderCards()}</div>
    </>
  );
}
