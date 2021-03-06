import React, { Component } from "react";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { List } from "../components/List";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    };

    render() {
        return (
            <>
            <div className="row justify-content-md-center">
                <div className="col-md-8">

                    <Card title="Saved Books" icon="download">
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <Book
                                        key={book._id}
                                        title={book.title}
                                        link={book.link}
                                        authors={book.authors.join(", ")}
                                        description={book.description}
                                        image={book.image}
                                        Button={() => (
                                            <button
                                                onClick={() => this.handleBookDelete(book._id)}
                                                className="btn btn-danger ml-2"
                                            >
                                                Delete
                                            </button>
                                        )}
                                    />
                                ))}
                            </List>
                        ) : (
                            <h2 className="text-center">No Saved Books</h2>
                        )}
                    </Card>
                </div>
            </div>
            <br />
            <br />
            <Footer />
            </>
        );
    }
}

export default Saved;

