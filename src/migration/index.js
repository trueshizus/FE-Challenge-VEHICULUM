// Used to migrate data to Firestore
const fetch = require("isomorphic-fetch");
const firebase = require("firebase");
// Add the Firebase services that you want to use

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

async function migrateData() {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const ALL_JOKES_URL = encodeURI(
    "https://api.chucknorris.io/jokes/search?query=all"
  );
  const CATEGORIES_URL = encodeURI(
    "https://api.chucknorris.io/jokes/categories"
  );

  async function migrateCategories() {
    const response = await fetch(CATEGORIES_URL);
    const categories = await response.json();
    return await Promise.all(
      categories.map(categorieString =>
        db.collection("categories").add({ label: categorieString })
      )
    );
  }

  async function migrateJokes() {
    const response = await fetch(ALL_JOKES_URL);
    const jokes = await response.json();
    const categoriesQuery = await db.collection("categories").get();
    const categories = categoriesQuery.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return await Promise.all(
      jokes.result.map(joke => {
        // Retrives the list of categories ID's for joke
        const jokeCategories = categories
          .filter(category => joke.categories.includes(category.label))
          .map(({ id }) => id);

        // Creates the joke in the database
        return db.collection("jokes").add({
          ...joke,
          categories: jokeCategories,
          upvotes: 0,
          downvotes: 0,
          author: ""
        });
      })
    );
  }

  await migrateCategories();
  await migrateJokes();
}
