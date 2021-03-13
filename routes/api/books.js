const router = require("express").Router();
const booksController = require("../../controller/booksController");
// const axios = require("axios")

// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id")
.delete(booksController.remove);

// router.route.post("/bookApi",function (res, req) {
//     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${userInput}&key=${SAFE_API_KEY}`);
// })

module.exports = router;
