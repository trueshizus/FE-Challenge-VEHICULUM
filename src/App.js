import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import JokePage from "./components/JokePage";
import JokeView from "./components/JokeView";
import CreateJoke from "./components/CreateJoke";
import MyPublishedJokes from "./components/MyPublishedJokes";
import MySavedJokes from "./components/MySavedJokes";
import Menu from "./components/Menu";
import Login from "./components/Login";
import AccountInformation from "./components/AccountInformation";
import FirebaseContext from "./firebase/firebaseContext";

import "./App.scss";

function App(props) {
  const { firebase } = props;

  return (
    <FirebaseContext.Provider value={firebase}>
      <Menu />
      <Header />
      <Router>
        <Home path="/" />
        <JokePage path="jokes">
          <JokeView path=":id" />
        </JokePage>
        <CreateJoke path="jokes/new" />
        <MyPublishedJokes path="jokes/mine" />
        <MySavedJokes path="jokes/saved" />
        <AccountInformation path="/me" />
        <Login path="/login" />
      </Router>
      <Footer />
    </FirebaseContext.Provider>
  );
}

export default App;
