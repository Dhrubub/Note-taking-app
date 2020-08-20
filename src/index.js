import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.css";

const Page = (props) => {
  //  Array containing all the created notes
  const [notes, setNotes] = useState([]);

  //  Array to store the text from input
  const [text, setText] = useState("");

  //  Adds a new note element
  function handleSubmit() {
    setNotes([...notes, text]);
    setText("");
  }

  //  Removes the specified note element
  function handleErase(note, index) {
    setNotes(notes.filter((current, id) => id !== index));
  }

  return (
    <div className="page">
      <div className="input">
        <textarea
          className="Text"
          rows="5"
          value={text}
          s
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <a href="#current">
          <button
            id="dhruv"
            className="submit btn btn-success"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </a>
      </div>

      {/* Maps the string from notes to an unordered list */}
      {notes.map((note, index) => (
        <ul className="list" key={index}>
          <div className="output">
            <p readOnly className=" alert-info p-2 " id="textOutput">
              {note}
            </p>
            <button
              className="btn btn-danger"
              id="erase"
              onClick={() => handleErase(note, index)}
            >
              Erase
            </button>
          </div>
        </ul>
      ))}
    </div>
  );
};

const Root = () => {
  return (
    <div>
      <Page />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
