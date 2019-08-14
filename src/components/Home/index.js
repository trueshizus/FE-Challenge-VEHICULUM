import React, { useState } from "react";
import { Link } from "@reach/router";
import JokeCard from "../JokeCard";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";
import Loading from "../Loading";
import Filters from "../Filters";

function Home() {
  const [activeFilter, setActiveFilter] = useState(null);

  const [
    jokes,
    loadingJokes,
    nextJokePage,
    setConditions
  ] = useFirebaseCollection("jokes", 6, ["id", "desc"]);

  const [categories, loadingCategories, _] = useFirebaseCollection(
    "categories"
  );

  const changeFilter = filter => {
    filter
      ? setConditions(["categories", "array-contains", `${filter.id}`])
      : setConditions([]);
    setActiveFilter(filter);
  };

  return (
    <main class="container">
      <Filters
        categories={categories}
        loadingCategories={loadingCategories}
        changeFilter={changeFilter}
        activeFilter={activeFilter}
      />

      <div class="tags">
        {activeFilter &&
          <span
            class="tag typography typography--tag bullet-small-rigth"
            onClick={() => changeFilter(null)}
          >
            {activeFilter.label}
          </span>}
      </div>
      <div class="joke-cards">
        {jokes.length === 0 &&
          <NoJokesAvaliables activeFilter={activeFilter} />}
        {jokes.length != 0 &&
          jokes.map(joke => <JokeCard key={joke.id} {...joke} />)}
      </div>
      <div class="actions">
        <button
          class="pill pill--medium  pill__action typography typography--pill typography--link arrow-down"
          onClick={() => {
            nextJokePage();
          }}
        >
          {" "}View More
        </button>
      </div>
    </main>
  );
}

function NoJokesAvaliables(props) {
  const { activeFilter } = props;
  return activeFilter
    ? <div class="no-data typography__center">
        <h1 class="typography typography__semi-bold">
          {" "} No jokes avaliable for this filter! Try another one or submit
          one{" "}
        </h1>
        <Link
          class="link arrow-rigth typography typography--link typography__semi-bold"
          to="jokes/new"
        >
          Submit Joke
        </Link>
      </div>
    : <Loading>Loading Jokes...</Loading>;
}

export default Home;
