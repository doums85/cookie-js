import  { useState } from 'react';

export default function FetchData({ onChangeHandler, dbRequest }) {
  const [textEntered, setTextEntered] = useState('');
  const [manga, setManga] = useState(null);

  function fetchData(e) {
    e.preventDefault();

    // 2) Get the collection's data
    const transaction = dbRequest.transaction('josei');
    const store = transaction.objectStore('josei');

    const request = store.get(textEntered);

    request.onsuccess = function (event) {
      setManga(event.target.result);
    };

    request.onerror = function (event) {
      console.log(`Something went wrong : ${event.error.message}`);
    };
  }

  // Get All data from the database
  function getAllDataHandler(e) {
    e.preventDefault();

    // 2) Get the collection's data
    const transaction = dbRequest.transaction('shonen');
    const store = transaction.objectStore('shonen');

    const request = store.getAll();

    request.onsuccess = function (event) {
      console.log(event.target.result);
    };

    request.onerror = function (event) {
      console.log(`Something went wrong : ${event.error.message}`);
    };
  }

  return (
    <div>
      <h1>Get Data With API</h1>

      <form>
        <input
          onChange={(e) => onChangeHandler(e)(setTextEntered)}
          type="text"
          placeholder="Search an index..."
          required
        />
        <input onClick={(e) => fetchData(e)} type="submit" value="Search" />
      </form>

      <button onClick={(e) => getAllDataHandler(e)}>Get All Data</button>

      <div style={{ marginTop: '1rem' }}>
        
        <h3>{manga?.name} </h3>
        <p>{manga?.author} </p>
        <br />
        <p>{manga?.description} </p>
      </div>
    </div>
  );
}
