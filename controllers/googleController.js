const axios = require("axios");
const db = require("../models");

console.log("REACHED CONTROLLER");
module.exports = {
    findAll: async (req, res) => {
        console.log("CONNECTED TO GOOGLE BOOKS");
        try {
            
            const { query: params } = req;
            // Axios request to fetch books
            const results = await axios.get(
                "https://www.googleapis.com/books/v1/volumes",
                { params }
            );
            // filter results
            const apiBooks = await results.data.items.filter(
                (result) =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            );
            
            // get books from database
            const dbBooks = await db.Book.find();

            // filter saved books from axios request -- only returning books that haven't been saved
            const books = await apiBooks.filter((apiBook) =>
                dbBooks.every(
                    (dbBook) => dbBook.googleId.toString() !== apiBook.id
                )
            );
            
            return res.json(books)

        } catch (err) {
            return res.status(422).json(err);
        }
    }
};