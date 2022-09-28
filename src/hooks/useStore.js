import { useEffect, useState } from 'react';

export default function UseStore(collection) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    // 1) Create a DataBase
    // dbName, dbVersion
    const dbName = 'manga';
    const dbVersion = 4;
    const dbRequest = indexedDB.open(dbName, dbVersion);

    // Success
    dbRequest.onsuccess = function (event) {
      const db = event.target.result;

      // 1) Get the collection's methods
      const transaction = db.transaction(collection);
      setStore(transaction.objectStore(collection));
    };

    // Error
    dbRequest.onerror = function (event) {
      console.log(`Error 🚨 : ${event.error.message}`);
      setStore(null);
    };
  }, []);

  return store;
}
