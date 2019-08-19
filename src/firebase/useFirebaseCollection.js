import { useState, useContext, useEffect } from "react";
import firebaseContext from "./firebaseContext";

function useFirebaseCollection(collectionName, pageSize, order) {
  const { database } = useContext(firebaseContext);
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState([]);
  const [conditions, setConditions] = useState([]);

  const nextPage = async () => {
    const results = await database[collectionName].list(
      pageSize,
      order,
      conditions,
      collection.slice(-1)[0]
    );
    setCollection([...collection, ...results]);
  };

  useEffect(
    () => {
      const getDocuments = async () => {
        const documents = await database[collectionName].list(
          pageSize,
          [],
          conditions
        );
        setCollection(documents);
      };
      setLoading(true);
      getDocuments();
      setLoading(false);
    },
    [conditions, collectionName, database, pageSize]
  );

  return [collection, loading, nextPage, setConditions];
}

export default useFirebaseCollection;
