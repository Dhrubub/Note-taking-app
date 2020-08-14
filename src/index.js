import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* class TextBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="Text" id="input">
        <textarea class="Text" rows="10"></textarea>
      </div>
    );
  }
} */

const Page = (props) => {
  const [text, setText] = useState("");
  let i = 0;
  let h = 100;
  const [output = [i], copyText] = useState("");

  function erase(e) {
    let x = document.getElementById("erase");
    x.style.visibility = "hidden";
    copyText((e.target.value = ""));
  }

  function show(e) {
    let x = document.getElementById("erase");
    x.style.visibility = "visible";
    copyText((e.target.value = text));
    i++;
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
          class="submit"
          onClick={(e) => {
            show(e);
          }}
        >
          Submit
        </button>
      </div>

      <div class="output">
        <p class="textOutput">{output}</p>
        <button id="erase" onClick={(e) => erase(e)}>
          Erase
        </button>
      </div>
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
