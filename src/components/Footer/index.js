import React from "react";
import { Link } from "@reach/router";

function Footer() {
  return (
    <footer>
      <div class="container footer-actions">
        <h4 class="typography typography--footer">
          Got jokes? Get paid <br />for submitting!
        </h4>
        <Link
          class="link arrow-rigth typography typography--link typography__semi-bold typography__center"
          to="jokes/new"
        >
          Submit Joke
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
