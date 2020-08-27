import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.css";
import Page from "./Components/Page";

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
