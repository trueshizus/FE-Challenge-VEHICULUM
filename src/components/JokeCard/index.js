import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

function Joke(props) {
  const { id, value } = props;
  const title = value.split(" ").slice(0, 2).join(" ");

  return (
    <div class="card card--medium">
      <h3 class="card__title typography typography--semi-bold">
        {title}
      </h3>
      <p class="card__content typography">
        {value}
      </p>
      <div class="card__link">
        <Link
          class={
            "link link__arrow-rigth typography typography--link typography--semi-bold"
          }
          to={`jokes/${id}`}
        >
          See stats
        </Link>
      </div>
    </div>
  );
}

Joke.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
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
