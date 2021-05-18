const db = require("../models");

module.exports = {
    // find all books
    findAll: async (req, res) => {
        try {
            const books = await db.Book.find(req.query);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },
    // find book by id
    findById: async (req, res) => {
        try {
            const books = await db.Book.findById(req.params.id);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },
    // create book in database
    create: async (req, res) => {
        try {
            const books = await db.Book.create(req.body);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },
    // update by id
    update: async (req, res) => {
        try {
            const books = await db.Book.findOneAndUpdate({ id: req.params.id }, req.body);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },
    // delete by id
    remove: async (req, res) => {
        try {
            const books = await db.Book.findById(req.params.id);
            const deleteBook = await books.remove();
            return res.json(deleteBook);
        } catch (err) {
            return res.status(422).json(err);
        }
    }
};