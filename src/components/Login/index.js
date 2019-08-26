import React, { useContext } from "react";
import { navigate } from "@reach/router";
import FirebaseContext from "../../firebase/firebaseContext";
import useCurrentUser from "../../firebase/useCurrentUser";

function Login() {
  const { signIn } = useContext(FirebaseContext);
  const currentUser = useCurrentUser();

  if (currentUser) {
    navigate("/");
  }

  return (
    <main class="container">
      <div class="card">
        <button
          onClick={() => signIn()}
          class="pill pill--medium  pill__action typography typography--pill typography--link"
        >
          Log In with Google!
        </button>
      </div>
    </main>
  );
}

export default Login;
