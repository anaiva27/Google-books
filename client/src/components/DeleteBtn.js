import React from 'react'

const DeleteBtn = (props) => {
    return (
       <button
            type="delete"
            // onClick={() => props.handleDeleteBook(props.googleId)
            {...props}
            
          >
            Delete
          </button>
    )
}

export default DeleteBtn
 
 

           