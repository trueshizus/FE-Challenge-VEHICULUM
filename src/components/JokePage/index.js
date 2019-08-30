import React, { memo } from "react";
import PropTypes from "prop-types";
import TopJokes from "../TopJokes";
function JokePage(props) {
  return (
    <main class="container single-joke">
      {props.children}
      <TopJokes />
    </main>
  );
}

JokePage.propTypes = {
  id: PropTypes.string
};
export default JokePage;
