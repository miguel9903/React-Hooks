import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UseState from "./components/UseState";
// import App from './App';
import UseReducer from "./components/UseReducer";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <UseReducer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
