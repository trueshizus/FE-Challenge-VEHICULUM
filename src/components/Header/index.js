import React from "react";
import Search from "../Search";
import Menu from "../Menu";

function Header() {
  return (
    <header>
      <Menu />
      <h1>The Joke Bible</h1>
      <h2>Daily Laughs for you and yours</h2>
      <Search />
    </header>
  );
}

export default Header;
