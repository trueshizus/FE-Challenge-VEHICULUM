import { useState, useContext, useEffect } from "react";
import firebaseContext from "./firebaseContext";

function useFirebaseDocument(collectionName, documentId) {
  const { database } = useContext(firebaseContext);
  const [isLoading, setIsLoading] = useState(true);
  const [document, setDocument] = useState([]);

  useEffect(
    () => {
      const getDocument = async () => {
        const results = await database[collectionName].get(documentId);
        setDocument(results);
      };
      setIsLoading(true);
      getDocument();
      setIsLoading(false);
    },
    [collectionName, database, documentId]
  );

  return [document, isLoading];
}

export default useFirebaseDocument;
