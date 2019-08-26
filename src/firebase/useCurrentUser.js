import { useState, useEffect, useContext } from "react";
import FirebaseContext from "./firebaseContext";

function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const { auth } = useContext(FirebaseContext);

  useEffect(
    () => {
      return auth.onAuthStateChanged(user => {
        setCurrentUser(user);
      });
    },
    [auth]
  );

  return currentUser;
}

export default useCurrentUser;
