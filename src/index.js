import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebaseSetup from "./firebase";

const firebase = firebaseSetup(process.env);

ReactDOM.render(<App firebase={firebase} />, document.getElementById("root"));
serviceWorker.unregister();
