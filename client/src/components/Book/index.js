import React from "react";
import { ListItem } from "../List";

function Book({ title, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <div className="row flex-wrap-reverse">
        <div className="col-md-8">
          <h3 className="font-italic">{title}</h3>
        </div>
        <div className="col-md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
          <p className="font-italic small">Written by {authors}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </div>
        <div className="col-md-12">
          <p>{description}</p>
        </div>
      </div>
    </ListItem>
  );
}

export default Book;
