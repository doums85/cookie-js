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

  function deleteAllDataHandler() {
    // 1) Create a new transaction
    const transaction = dbRequest.transaction('josei', 'readwrite');
    // 2) handling Object store
    const store = transaction.objectStore('josei');

    // 3) delete All objects
    const request = store.clear();

    request.onsuccess = function (event) {
      alert('All objects deleted successfully');
    };

    request.onerror = function (event) {
      alert('error deleting');
    };
  }

  // Delete COLLECTION | store
  function deleteCollectionHandler() {
    console.log('Click');
    const dbName = 'manga';
    const dbVersion = 6;

    const dbRequest = indexedDB.open(dbName, dbVersion);

    dbRequest.onsuccess = function (event) {
      console.log('====================================');
      console.log('Successfully');
      console.log('====================================');
    }
  }

  // Delete DATABASE
  function deleteDatabaseHandler() {
    const dbName = 'manga';

    // 1) Create a new db
    const dbRequest = indexedDB.deleteDatabase(dbName);

    // Handling upgrade
    dbRequest.onsuccess = function (event) {
      console.log('DB deleted successfully');
    };

    dbRequest.onerror = function (event) {
      console.log('Error deleting database');
    };
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
      <button className="btn-delete" onClick={deleteAllDataHandler}>
        Delete All Data
      </button>{' '}
      <button className="btn-delete" onClick={deleteCollectionHandler}>
        Delete A Collection
      </button>
      <button className="btn-delete" onClick={deleteDatabaseHandler}>
        Delete Database
      </button>
    </div>
  );
}
