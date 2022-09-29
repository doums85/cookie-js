/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';

export default function Delete({ onChangeHandler, db }) {
  const [textEntered, setTextEntered] = useState('');

  function deleteItemHandler(e) {
    e.preventDefault();
    if (confirm(`Are you sure you want to delete ${textEntered} ?`)) {
      db.collection('shonen').doc({ name: textEntered }).delete();

      alert(`${textEntered} deleted successfully !`);
    }
  }

  function deleteAllDataHandler() {
    if (confirm('Are you sure you want to all data from shonen collection?')) {
      db.collection('shonen').delete();
      alert('Shonen collection deleted successfully !');
    }
  }

  function deleteDatabaseHandler() {
    if (confirm('Are you sure you want to delete manga database?')) {
      db.delete();

      alert('Manga database deleted successfully !');
    }
  }

  return (
    <div>
      <h1>Delete Item With Library</h1>
      <form>
        <input
          type="text"
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
        Delete All Data and Collection
      </button>{' '}
      <button className="btn-delete" onClick={deleteDatabaseHandler}>
        Delete Database
      </button>
    </div>
  );
}
