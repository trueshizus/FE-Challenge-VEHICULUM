import databaseBuilder from "./database/builder";
import firebaseTools from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

function firebaseSetup(env) {
  const config = {
    apiKey: env.REACT_APP_API_KEY,
    authDomain: env.REACT_APP_AUTH_DOMAIN,
    databaseURL: env.REACT_APP_DATABASE_URL,
    projectId: env.REACT_APP_PROJECT_ID,
    storageBucket: env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID
  };

  const firebaseApp = firebaseTools.initializeApp(config);

  // Authentication set up
  const auth = firebaseApp.auth();
  const googleProvider = new firebaseTools.auth.GoogleAuthProvider();
  const signIn = () => {
    auth.signInWithPopup(googleProvider);
  };

  // Database set up
  const firestore = firebaseApp.firestore();
  const database = databaseBuilder(firestore);

  return {
    database,
    auth,
    signIn
  };
}

export default firebaseSetup;
