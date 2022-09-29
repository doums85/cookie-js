import React, { useState } from 'react';

export default function FetchData({ onChangeHandler, db }) {
  const [textEntered, setTextEntered] = useState('');
  const [manga, setManga] = useState(null);

  function fetchData(e) {
    e.preventDefault();

    db.collection('shonen')
      .doc({ name: textEntered })
      .get()
      .then((document) => setManga(document));
  }

  function getAllDataHandler() {
    // Get all data
    db.collection('shonen')
      .get()
      .then((document) => console.log(document));

    // Get all data with sort order
    db.collection('shonen')
      .orderBy('author', 'asc')
      .get()
      .then((document) => console.log(document));

    // get all data with limit
    db.collection('shonen')
      .orderBy('name', 'desc')
      .limit(1)
      .get()
      .then((document) => console.log(document));
  }

  return (
    <div>
      <h1>Get Data With Library</h1>

      <form>
        <input
          onChange={(e) => onChangeHandler(e)(setTextEntered)}
          type="text"
          placeholder="Search an index..."
          required
        />
        <input onClick={(e) => fetchData(e)} type="submit" value="Search" />
      </form>

      <button onClick={getAllDataHandler}>Get All Data</button>

      <div style={{ marginTop: '1rem' }}>
        {manga && <img src={URL.createObjectURL(manga?.image)} alt="" />}
        <h3>{manga?.name} </h3>
        <p>{manga?.author} </p>
        <br />
        <p>{manga?.description} </p>
      </div>
    </div>
  );
}
