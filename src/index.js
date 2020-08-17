import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const Page = (props) => {
  const [count, setCount] = useState(0);
  const [boxes, editBox] = useState([]);

  const [text, setText] = useState(boxes);

  function erase(e) {
    setText((e.target.value = ""));
    editBox(boxes.concat(<ul class="list" key={count}></ul>));
  }

  const element = (
    <div class="output">
      <textarea
        readonly
        class="alert-info"
        id="textOutput"
        rows="5"
        value={text}
      ></textarea>
      <button class="btn btn-danger" id="erase" onClick={(e) => erase(e)}>
        Erase
      </button>
    </div>
  );

  function submit(e) {
    setText((e.target.value = text));

    editBox(
      boxes.concat(
        <ul class="list" key={count}>
          {element}
        </ul>
      )
    );

    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Text changed: " + text);
  }, [text]);

  return (
    <div class="page">
      <div class="input">
        <textarea
          class="Text"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button
          class="submit btn btn-success"
          onClick={(e) => {
            submit(e);
          }}
        >
          Submit
        </button>
      </div>

      {boxes}
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
