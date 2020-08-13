import React from "react";
import logo from "./logo.svg";
import "./App.css";

// interface TitleProps {
//   title: String;
// }

// const TitleTypescript: React.FC<TitleProps> = (props) => {
//   return (
//     <h1>{props.description}</h1>
//   )
// }

const Title = (props) => {
  return <h1>{props.children}</h1>;
};

const TitleWithProps = (props) => {
  return <h1>{props.description}</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title>Hello World</Title>
        <TitleWithProps title="Hello World" />
        <p>
          Edit <code>src/App.js</code> and save
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
