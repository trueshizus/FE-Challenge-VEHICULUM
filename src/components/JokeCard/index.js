import React from "react";
import PropTypes from "prop-types";

function Joke(props) {
  const { title, value } = props;
  return (
    <div>
      <h3>
        {title}
      </h3>
      <p>
        {value}
      </p>
    </div>
  );
}

Joke.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
  created_at: PropTypes.string,
  icon_url: PropTypes.string,
  id: PropTypes.string,
  updated_at: PropTypes.string,
  url: PropTypes.string,
  value: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string
};

export default Joke;
