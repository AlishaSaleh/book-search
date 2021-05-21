import React, { Component } from "react";
import Jumbotron from '../components/Jumbotron';
import Form from '../components/Form';
import API from "../utils/API";
import Card from "../components/Card";


class Search extends Component {
    state = {
        books: [],
        q: "",
        message: "Search a book here!"
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No books found!"
                })
            );
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return (
            <>
                <Jumbotron />
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <Card title="Book Search">
                        <Form
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q}
                        />
                        </Card>
                    </div>
                </div>

            </>
        )
    }
}

export default Search;
