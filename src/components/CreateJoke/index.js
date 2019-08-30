import React, { useContext } from "react";
import { navigate } from "@reach/router";
import FirebaseContext from "../../firebase/firebaseContext";

function CreateJoke() {
  const { auth } = useContext(FirebaseContext);

  if (auth.currentUser === null) {
    navigate("/login");
  }

  return (
    <main class="container">
      <div class="message-block">
        <h1> Not implemented</h1>
      </div>
    </main>
  );
}

export default CreateJoke;
