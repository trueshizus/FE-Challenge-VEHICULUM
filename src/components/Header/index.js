import React from "react";
import Search from "../Search";
function Header() {
  return (
    <header class="header">
      <h1 class="typography typography__big">The Joke Bible</h1>
      <h2 class="typography typography__medium">
        Daily Laughs for you and yours
      </h2>
      <Search />
    </header>
  );
}

export default Header;
