import React, { useContext } from "react";
import { Link } from "@reach/router";
import { ReactComponent as Logo } from "../../assets/logo-horizontal.svg";
import useCurrentUser from "../../firebase/useCurrentUser";
import FirebaseContext from "../../firebase/firebaseContext";
import "../../styles/sections.scss";

function Menu() {
  const currentUser = useCurrentUser();
  const { auth } = useContext(FirebaseContext);

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

          {!currentUser
            ? <Link class="typography typography--nav" to="/login">
                LOG IN
              </Link>
            : <div class="menu--nav--dropdown">
                <div
                  class="typography typography--nav menu--nav--dropdown--label"
                  to="/signup"
                >
                  MEIN BEREICH
                </div>
                <div class="menu--nav--dropdown--links">
                  <Link
                    class="typography typography--nav--sublink"
                    to="jokes/mine"
                  >
                    My published jokes
                  </Link>

                  <Link
                    class="typography typography--nav--sublink"
                    to="/signup"
                  >
                    My saved jokes
                  </Link>

                  <Link
                    class="typography typography--nav--sublink"
                    to="jokes/saved"
                  >
                    Account Information
                  </Link>

                  <Link
                    class="typography typography--nav--sublink"
                    to="jokes/new"
                  >
                    Publish new joke
                  </Link>

                  <a
                    class="typography typography--nav--sublink"
                    onClick={() => auth.signOut()}
                    href="/#"
                  >
                    Log out
                  </a>
                </div>
              </div>}
        </div>
      </nav>
    </div>
  );
}

export default Menu;
