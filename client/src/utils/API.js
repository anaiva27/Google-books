// key = AIzaSyDEqWOaZeHGCKfBxPOsQpRE5nwMILRZeIE;

import axios from "axios";

export default {
  googleSearch: function (URL) {
    return axios.get(URL);
  },
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
