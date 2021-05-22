import axios from "axios";

export default {
    getBooks: function (q) {
        console.log(q)
        return axios.get("/api/google", { params: { q: "title:" + q } });
    },
    getSavedBooks: function () {
        return axios.get("/api/books");
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
