import React from "react";
import Tag from "../Tag";
import Loading from "../Loading";
import useFirebaseDocument from "../../firebase/useFirebaseDocument";
import { navigate } from "@reach/router";

function JokeView({ id }) {
  const title = "";
  const [joke, isLoading, updateJoke] = useFirebaseDocument("jokes", id);

  const changePage = pageNumber => {
    if (pageNumber === 0) {
      return;
    }
    navigate(`/jokes/${pageNumber}`);
  };

  if (isLoading) {
    return <Loading> Loading joke...</Loading>;
  }

  return (
    <div class="single-joke__container">
      <div class="single-joke__joke-card card card--box">
        <div class="card__header">
          {joke.categories.map(id => <Tag key={id} id={id} />)}
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
          {joke.value}
        </p>
      </div>

      <div class="single-joke__actions">
        <div class="single-joke__actions__votes">
          <div>
            <div
              class="single-joke__actions__vote single-joke__actions__vote--up"
              onClick={() => updateJoke(joke, { upvotes: joke.upvotes + 1 })}
            />
            <div class="typography typography__semi-bold typography--vote typography--vote__up">
              {joke.upvotes}
            </div>
          </div>
          <div>
            <div
              class="single-joke__actions__vote single-joke__actions__vote--down "
              onClick={() =>
                updateJoke(joke, { downvotes: joke.downvotes - 1 })}
            />
            <div class="typography typography__semi-bold typography--vote typography--vote__down">
              {joke.downvotes}
            </div>
          </div>
        </div>
        <div class="single-joke__actions__pages">
          <div
            class="card card--box-small typography typography--link typography__semi-bold action-arrow-left"
            onClick={() => changePage(Number(id) - 1)}
          >
            PREV. JOKE
          </div>
          <div
            class="card card--box-small typography typography--link typography__semi-bold action-arrow-right"
            onClick={() => changePage(Number(id) + 1)}
          >
            NEXT JOKE
          </div>
        </div>
      </div>
    </div>
  );
}

export default JokeView;
