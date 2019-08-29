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
      <div class="login">
        <h1 class="typography typography__big">
          Join us and start creating jokes!
        </h1>

        <button
          onClick={() => signIn()}
          class="pill pill--medium  google-login-button typography typography--pill typography--link"
        >
          Log In with Google!
        </button>
      </div>
    </main>
  );
}

export default Login;
