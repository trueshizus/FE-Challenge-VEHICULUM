import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../assets/logo-horizontal.svg";
import "../../styles/sections.scss";

function Menu() {
  const currentUser = false; //useCurrentUser();

  return (
    <div class="menu">
      <nav role="navigation" class="menu--nav container">
        <Link to="/">
          <Logo style={{ height: "60px" }} />
        </Link>
        <div class="menu--nav--links">
          <Link class="typography typography--nav" to="/">
            SO FUNKTIONIERT’S
          </Link>

          <Link class="typography typography--nav" to="/">
            SONDERANGEBOTE
          </Link>

          <Link class="typography typography--nav" to="/signup">
            LOG IN
          </Link>

          <div class="menu--nav--dropdown">
            <Link class="typography typography--nav" to="/signup">
              MEIN BEREICH
            </Link>
            <div class="menu--nav--dropdown--links">
              <Link class="typography typography--nav--sublink" to="jokes/mine">
                My published jokes
              </Link>

              <Link class="typography typography--nav--sublink" to="/signup">
                My saved jokes
              </Link>

              <Link
                class="typography typography--nav--sublink"
                to="jokes/saved"
              >
                Account Information
              </Link>

              <Link class="typography typography--nav--sublink" to="jokes/new">
                Publish new joke
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
