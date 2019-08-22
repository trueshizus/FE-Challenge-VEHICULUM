import React from "react";
import { Link } from "@reach/router";
import useFirebaseCollection from "../../firebase/useFirebaseCollection";

function TopJokes() {
  const [jokes, ,] = useFirebaseCollection("jokes", 10, ["upvotes", "desc"]);
  const title = joke => joke.value.split(" ").slice(0, 2).join(" ");

  return (
    <div class="single-joke__ranking card">
      <h1 class="typography typography__semi-bold">
        THE TOP 10 JOKES THIS WEEK{" "}
      </h1>
      {jokes.map(joke =>
        <Link
          class="single-joke__ranking__link typography"
          to={`/jokes/${joke.id}`}
        >
          {title(joke)}
        </Link>
      )}
    </div>
  );
}

export default TopJokes;
