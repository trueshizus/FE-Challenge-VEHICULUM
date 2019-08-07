import React from "react";
import { Link } from "@reach/router";

function Header() {
  return (
    <header>
      Header
      <nav>
        <Link to="/">Home</Link>
        <Link to="jokes/:1"> A Joke</Link>
        <Link to="jokes/new">New Joke</Link>
        <Link to="jokes/mine">My Jokes</Link>
        <Link to="jokes/saved">Saved Jokes</Link>
        <Link to="/me">Me</Link>
      </nav>
    </header>
  );
}

export default Header;
