import React from "react";
// import DeteleBtn from "./DeleteBtn"

const Card = (props) => {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <h3>{props.title}</h3>

                 {/* <button
            type="Save"
            onClick={() => props.handleSaveBook(props.googleId)}
          >
            Save
          </button> */}
          {/* <button
            type="delete"
            onClick={() => props.handleDeleteBook(props.googleId)}
          >
            Delete
          </button>
           */}
           {/* <DeteleBtn onClick={() => props.handleDeleteBook(props.googleId)}/> */}
          <div>{props.author}</div>
          {/* <div>
            {props.author.map((author) => (
              <span> {author}, </span>
            ))}
          </div> */}
         
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
