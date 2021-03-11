const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: [Array], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { },
  googleId: { type: String, required: true, unique: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
