import React, { useState } from "react";
import JokeCard from "../JokeCard";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";

function Home() {
  const [activeFilter, setActiveFilter] = useState(null);
  const filters = [
    { id: 1, description: "Adult Jokes" },
    { id: 2, description: "Dad Jokes" }
  ];

  const [jokes, loading, nextPage, setConditions] = useFirebaseCollection(
    "jokes",
    6
  );

  const changeFilter = filter => {
    setActiveFilter(filter);
  };

  return (
    <main>
      {filters.map(filter =>
        <span key={filter.id} onClick={() => changeFilter(filter)}>
          {filter.description}
        </span>
      )}
      {activeFilter &&
        <span>
          {activeFilter.description}
        </span>}
      {jokes.map(joke => <JokeCard key={joke.id} {...joke} />)}
      <button
        onClick={() => {
          nextPage();
        }}
      >
        {" "}Load More
      </button>
    </main>
  );
}

export default Home;
