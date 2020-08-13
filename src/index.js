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
  const [output, copyText] = useState("");

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Text changed: " + text);
  }, [text]);

  return (
    <div>
      <div class="Text" id="input">
        <textarea
          class="Text"
          rows="5"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      <div class="submit">
        <button onClick={(e) => copyText((e.target.value = text))}>
          Submit
        </button>

        <button onClick={(e) => copyText((e.target.value = ""))}>Erase</button>
      </div>

      <div class="Text" id="output">
        <textarea class="Text" rows="5" value={output}></textarea>
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
