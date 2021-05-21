import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <>
            <div className="jumbotron" id="hero">
                <div className="fade-in">
                    <h4 className="display-4 text-center" id="head-shad">Google Book Search</h4>
                    <hr className ="col-md-4"/>
                    <p className="lead text-center hero-text">Start by entering a book in the search bar below!</p>
                </div>
            </div>
        </>
    )
}

export default Jumbotron;