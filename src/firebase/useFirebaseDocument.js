import { useState, useContext, useEffect } from "react";
import firebaseContext from "./firebaseContext";

function useFirebaseDocument(collectionName, documentId) {
  const { database } = useContext(firebaseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState({});

  const updateDocument = async (doc, changes) => {
    await database[collectionName].update(doc, changes);
    setDocument({ ...doc, ...changes });
  };

  useEffect(
    () => {
      const getDocument = async () => {
        setIsLoading(true);
        const doc = await database[collectionName].get(documentId);
        setDocument(doc);
        setIsLoading(false);
      };

      getDocument();
    },
    [collectionName, database, documentId]
  );

  return [document, isLoading, updateDocument];
}

export default useFirebaseDocument;
