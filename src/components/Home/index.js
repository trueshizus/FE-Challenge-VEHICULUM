import React, { useState } from "react";
import JokeCard from "../JokeCard";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";

function Home() {
  const [activeFilter, setActiveFilter] = useState(null);

  const [
    jokes,
    jokesLoading,
    nextJokePage,
    setConditions
  ] = useFirebaseCollection("jokes", 6, ["id", "desc"]);

  const [categories, categoriesLoading, ..._] = useFirebaseCollection(
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
      <div className="filters">
        {categories.map(category =>
          <span
            class="pill typography typography--pill"
            key={category.id}
            onClick={() => changeFilter(category)}
          >
            {category.label}
          </span>
        )}
      </div>

      {activeFilter &&
        <span>
          {activeFilter.description}
        </span>}
      {jokes.map(joke => <JokeCard key={joke.id} {...joke} />)}
      <button
        onClick={() => {
          nextJokePage();
        }}
      >
        {" "}Load More
      </button>
    </main>
  );
}

export default Home;
