/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

export default function Delete({ onChangeHandler, dbRequest }) {
  const [textEntered, setTextEntered] = useState('');

  function deleteItemHandler(e) {
    e.preventDefault();

    const transaction = dbRequest.transaction('shonen', 'readwrite');
    const store = transaction.objectStore('shonen');
    if (confirm('Are you sure you want to delete this item?')) {
      const request = store.delete(Number(textEntered));

      request.onsuccess = function (event) {
        alert(`Successfully deleted`);
      };

      request.onerror = function (event) {
        console.log(`Something went wrong : ${event.error.message}`);
      };
    }
  }



function deleteCollectionHandler() {
  const dbName = 'manga';
  const dbVersion = 5;
  const dbRequest = indexedDB.open(dbName, dbVersion);

  dbRequest.onupgradeneeded = function (event) {
    const db = event.target.result;

    console.log(db);
  }
}


  return (
    <div>
      <h1>Delete Item</h1>
      <form>
        <input
          type="number"
          onChange={(e) => onChangeHandler(e)(setTextEntered)}
        />
        <input
          onClick={(e) => deleteItemHandler(e)}
          type="submit"
          value="Delete Item"
        />
      </form>

      <br />

      <button onClick={deleteCollectionHandler}>Delete Collection</button>
    </div>
  );
}
