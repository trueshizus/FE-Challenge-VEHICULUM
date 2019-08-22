import { COLLECTIONS } from "./constants";

function builder(firestore) {
  const collectionManagers = COLLECTIONS.reduce(
    (collectionManagers, collection) => ({
      ...collectionManagers,
      [collection]: collectionManager(firestore, collection)
    }),
    {}
  );

  return collectionManagers;
}

function collectionManager(firestore, collection) {
  const dbCollection = firestore.collection(collection);

  return {
    async get(documentId) {
      const docRef = dbCollection.doc(documentId);
      const rawDocument = await docRef.get();
      return { ...rawDocument.data(), id: rawDocument.id };
    },

    async list(pageSize, order = [], conditions = [], fromDocument) {
      let query = dbCollection;
      if (pageSize) {
        query = query.limit(pageSize);
      }

      if (order.length > 0) {
        query = query.orderBy(...order);
      }

      if (fromDocument) {
        query = query.startAfter(fromDocument.id);
      }
      if (conditions.length > 0) {
        query = query.where(...conditions);
      }
      const results = await query.get();

      return results.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    },
    // Add pagination handling
    async subscribe(setDocuments) {
      const unsubscribe = dbCollection.onSnapshot(querySnapshot => {
        setDocuments(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      });
      return unsubscribe;
    },

    async create(document) {
      const documentWithTimeStamp = {
        ...document,
        createdAt: new Date()
      };
      dbCollection.add(documentWithTimeStamp);
    },

    async delete(document) {
      dbCollection.doc(document.id).delete();
    },

    async update(document, changes) {
      const docRef = await dbCollection.doc(document.id);
      docRef.update(changes);
    }
  };
}

export default builder;
