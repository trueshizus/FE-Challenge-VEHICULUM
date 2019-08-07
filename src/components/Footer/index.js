import React from "react";
import { Link } from "@reach/router";

function Footer() {
  return (
    <div>
      <h4>Got jokes? Get paid for submitting!</h4>
      <Link to="jokes/new">Submit Joke</Link>
    </div>
  );
}

export default Footer;
