import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <div>{props.title}</div>

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
            src={
              props.image
                ? `${props.image.smallThumbnail}`
                : "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
