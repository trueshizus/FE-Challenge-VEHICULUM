import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../assets/logo-horizontal.svg";
import "../../styles/sections.scss";

function Menu() {
  return (
    <div class="menu">
      <nav class="menu--nav container">
        <Logo />
        <div>
          <Link class={"typography typography--nav"} to="/">
            Home
          </Link>
          <Link class={"typography typography--nav"} to="jokes/:1">
            {" "}A Joke
          </Link>
          <Link class={"typography typography--nav"} to="jokes/new">
            New Joke
          </Link>
          <Link class={"typography typography--nav"} to="jokes/mine">
            My Jokes
          </Link>
          <Link class={"typography typography--nav"} to="jokes/saved">
            Saved Jokes
          </Link>
          <Link class={"typography typography--nav"} to="/me">
            Me
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
