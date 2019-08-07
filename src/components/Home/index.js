import React, { useState } from "react";
import JokeCard from "../JokeCard";

function Home() {
  const [activeFilter, setActiveFilter] = useState(null);
  const filters = [
    { id: 1, description: "Adult Jokes" },
    { id: 2, description: "Dad Jokes" }
  ];
  const jokes = [
    {
      categories: [{ id: 1, description: "Adult Jokes" }],
      created_at: "2016-05-01 10:51:41.584544",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "TnvC7G19RdyajB_761eqfw",
      updated_at: "2016-05-01 10:51:41.584544",
      url: "https://api.chucknorris.io/jokes/TnvC7G19RdyajB_761eqfw",
      value:
        "What do you call a woman who hasn't slept with Chuck Norris? A Lesbian.",
      upvotes: 10,
      downvotes: 10,
      author: "Pepe Joke"
    }
  ];

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
      <button> Load More</button>
    </main>
  );
}

export default Home;
