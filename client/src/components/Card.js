import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <div>{props.title}</div>
          <button
            type="Save"
            onClick={() => props.handleSaveBook(props.googleId)}
          >
            Save
          </button>
          <button
            type="delete"
            onClick={() => props.handleDeleteBook(props.googleId)}
          >
            Delete
          </button>
          <div>{props.author}</div>
          {/* <div>
            {props.author.map((author) => (
              <span> {author}, </span>
            ))}
          </div> */}
          <div>
            <a href={props.link} target="_blank" rel="noreferrer">
              View
            </a>
          </div>
          <div>{props.description}</div>
          <img
            alt="book thumbnail"
            src={props.image ? `${props.image.smallThumbnail}` : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
