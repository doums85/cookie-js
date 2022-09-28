import { Add, Delete, FetchData, Update } from './components';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dbRequest, setDbRequest] = useState(null);

  useEffect(() => {
    // 1) Create a DataBase
    // dbName, dbVersion
    const dbName = 'manga';
    const dbVersion = 4;
    const dbRequest = indexedDB.open(dbName, dbVersion);

    // 2) Handling status db
    // onupgradeneeded Only if version is changed
    dbRequest.onupgradeneeded = function (event) {
      // 3) Create Collection
      const db = event.target.result;

      // name
      // {keyPath: 'email'} || {autoIncrement: true or false}
      /* db.createObjectStore('josei', { keyPath: name });
        db.createObjectStore('kodomo', { autoIncrement: true });
        db.createObjectStore('shonen', { autoIncrement: true });
        db.createObjectStore('shojo', { autoIncrement: true });
        db.createObjectStore('seinen', { autoIncrement: true });
      */
    };

    // Success
    dbRequest.onsuccess = function (event) {
      setDbRequest(event.target.result);
    };

    // Error
    dbRequest.onerror = function (event) {
      console.log(`Error 🚨 : ${event.error.message}`);
      setDbRequest(null);
    };
  }, []);

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  return (
    <div className="App">
      {/* <Add  onChangeHandler={onChangeHandler} dbRequest={dbRequest} /> 👇 */}
      <Add {...{ onChangeHandler, dbRequest }} />

      <hr />

      {/* Fetch Data */}
      <FetchData {...{ onChangeHandler, dbRequest }} />

      <hr />

      {/* Update Data */}
      <Update {...{ onChangeHandler, dbRequest }} />

      <hr />

      {/* Delete */}
      <Delete {...{ onChangeHandler, dbRequest }} />
    </div>
  );
}

export default App;
