import React from "react";
import PropTypes from "prop-types";
import useFirebaseDocument from "../../firebase/useFirebaseDocument";
import Loading from "../Loading";
import Tag from "../Tag";

function JokePage(props) {
  const { jokeId } = props;
  const [joke, isLoading] = useFirebaseDocument("jokes", jokeId);

  return (
    <div>
      {isLoading && <Loading> Loading joke...</Loading>}
      {!isLoading && <JokeView {...joke} />}
    </div>
  );
}

function JokeView(props) {
  const {
    categories = [],
    created_at,
    icon_url,
    id,
    updated_at,
    url,
    value = "",
    upvotes,
    downvotes,
    author
  } = props;

  const title = value.split(" ").slice(0, 2).join(" ");

  return (
    <main class="container single-joke">
      <div class="single-joke__joke-card card card--box">
        <div class="card__header">
          {categories.map(id => <Tag key={id} id={id} />)}
          <h4 class="typography typography--trending typography__semi-bold bullet-small-rigth">
            Trending
          </h4>
        </div>
        <div class="card__big-title">
          <h3 class="typography typography__semi-bold typography--big-title">
            {title}
          </h3>
          <div class="card__big-title__divider" />
          <h6> NO #1</h6>
        </div>
        <p class="card__content typography">
          {value}
        </p>
      </div>

      <div class="single-joke__ranking card">
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
        <p>THE TOP 10 JOKES THIS WEEK</p>
      </div>

      <div class="single-joke__actions">
        <div class="single-joke__actions__votes">
          <div>
            <div class="single-joke__actions__vote single-joke__actions__vote--up" />
            <div class="typography typography__semi-bold typography--vote typography--vote__up">
              {upvotes}
            </div>
          </div>
          <div>
            <div class="single-joke__actions__vote single-joke__actions__vote--down " />
            <div class="typography typography__semi-bold typography--vote typography--vote__down">
              {downvotes}
            </div>
          </div>
        </div>
        <div class="single-joke__actions__pages">
          <div class="card card--box-small typography typography--link typography__semi-bold action-arrow-left">
            PREV. JOKE
          </div>
          <div class="card card--box-small typography typography--link typography__semi-bold action-arrow-right">
            NEXT JOKE
          </div>
        </div>
      </div>
    </main>
  );
}

JokePage.propTypes = {
  id: PropTypes.string
};
export default JokePage;
