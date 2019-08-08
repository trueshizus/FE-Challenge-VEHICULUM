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
    async get(pageSize, order = [], conditions = [], fromDocument) {
      console.log("collection", collection);
      console.log("pageSize", pageSize);
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

      return results.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    // Add pagination handling
    async subscribe(setDocuments) {
      const unsubscribe = dbCollection.onSnapshot(querySnapshot => {
        setDocuments(
          querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
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

    async update(document) {
      const docRef = dbCollection.doc(document.id);
      return await dbCollection.runTransaction(transaction => {
        return transaction.get(docRef).then(function(sfDoc) {
          if (!sfDoc.exists) {
            throw Error.new(
              "The Document you triend to update, does not exist!"
            );
          }
          transaction.update(docRef, document);
        });
      });
    }
  };
}

export default builder;
