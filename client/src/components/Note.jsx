import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
const axios = require('axios').default;
function Note(props) {
  function handleClick() {
    axios
        .get("/del/"+props.id1)
        .then(res => {
          if(res.data==="Success") {
            axios
                .get("/notes")
                .then(result => {
                  props.arr(result.data);
                })
          }
        });
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
