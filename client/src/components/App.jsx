import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
const axios = require('axios').default;
function App() {
  const [notes, setNotes] = useState([]);
  axios
      .get("/notes")
      .then(result => {
        setNotes(result.data);
      })
  function getData(key) {
    setNotes(key);
  }

  return (
    <div>
      <Header />
      <CreateArea arr={getData}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            arr={getData}
            content={noteItem.content}
            id1={noteItem._id}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
