import React from "react";
import SaveBtn from "../components/SaveBtn";
import DeleteBtn from "../components/DeleteBtn";


const Card = (props) => {
// console.log(props)
//   const btnConditions = () => {
//    let result = null;

//     if (document.querySelector("#saved")) {
//       result = (
//         <>
//           <button className="btn btn-sm btn-outline-dark" >
//                 <a href={props.link} target="_blank">
//                   View
//                 </a>
//               </button>
//           <DeleteBtn onClick={() => props.deleteFunc(props.googleId)} />
//          </>
//       ); 
//     } else {result = (
//         <>
//           <button className="btn btn-sm btn-outline-dark" >
//                 <a href={props.link} target="_blank">
//                   View
//                 </a>
//               </button>
//           <SaveBtn onClick={() => props.SaveFunc(props.googleId)} />
//          </>
//       );
     
//     }

//     return result;
//   }


  
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">

        { props.saveFunc ? ( 
     
        <div id={props.googleId}>
          <button className="btn btn-sm btn-outline-dark" >
                <a href={props.link} target="_blank">
                  View
                </a>
              </button>
          <SaveBtn onClick={() => props.saveFunc(props.googleId)} />
         </div>
     
         ) : ( 
        <div id={props.googleId}>
          <button className="btn btn-sm btn-outline-dark" >
                <a href={props.link} target="_blank">
                  View
                </a>
              </button>
          <DeleteBtn onClick={() => props.deleteFunc(props.googleId)} />
         </div>
         )}


          <h3>{props.title}</h3>
          <img
            alt="book thumbnail"
            src={props.image ? `${props.image.smallThumbnail}` : ""}
          />
          <div>
            <b>By: </b>
            {props.author}
          </div>
          {/* <div>
            {props.author.map((author) => (
              <span> {author}, </span>
            ))}
          </div> */}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
