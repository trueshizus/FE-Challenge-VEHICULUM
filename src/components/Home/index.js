import React, { useState } from "react";
import JokeCard from "../JokeCard";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";
import Loading from "../Loading";

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
    <main>
      <div class="filters">
        {loadingCategories
          ? <Loading> Loading categories...</Loading>
          : categories.map(category =>
              <span
                class={`pill typography typography--pill ${category ===
                activeFilter
                  ? "pill__active"
                  : ""}`}
                key={category.id}
                onClick={() => changeFilter(category)}
              >
                {category.label}
              </span>
            )}
      </div>

      <hr />
      <div class="tags">
        {activeFilter &&
          <span
            class="tag typography typography--tag"
            onClick={() => changeFilter(null)}
          >
            {activeFilter.label}
          </span>}
      </div>
      <div class="joke-cards">
        {loadingJokes
          ? <Loading>Loading Jokes...</Loading>
          : jokes.map(joke => <JokeCard key={joke.id} {...joke} />)}
      </div>
      <div class="actions">
        <button
          class="pill pill__action typography typography--pill typography--link arrow-down"
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

export default Home;
