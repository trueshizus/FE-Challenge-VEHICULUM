import React from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import JokePage from "./components/JokePage";
import CreateJoke from "./components/CreateJoke";
import MyPublishedJokes from "./components/MyPublishedJokes";
import MySavedJokes from "./components/MySavedJokes";
import AccountInformation from "./components/AccountInformation";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/" />
        <JokePage path="jokes/:jokeId" />
        <CreateJoke path="jokes/new" />
        <MyPublishedJokes path="jokes/mine" />
        <MySavedJokes path="jokes/saved" />
        <AccountInformation path="/me" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
