import { Add, Delete, FetchData, Update } from './components/WithAPI';
import {
  Add as AddWithLibrary,
  FetchData as FetchDataWithLibrary,
  Update as UpdateWithLibrary,
  Delete as DeleteWithLibrary,
} from './components/WithLibrary';
import './App.css';
import {  useState } from 'react';
import Localbase from 'localbase';

function App() {
  const [dbRequest, setDbRequest] = useState(null);
  /*
  useEffect(() => {
    // 1) Create a DataBase
    // dbName, dbVersion
    const dbName = 'manga';
    const dbVersion = 9;
    const dbRequest = indexedDB.open(dbName, dbVersion);

    // 2) Handling status db
    // onupgradeneeded Only if version is changed
    dbRequest.onupgradeneeded = function (event) {
      // 3) Create Collection
      const db = event.target.result;

      db.deleteObjectStore('shonen')
      db.createObjectStore('josei', { keyPath: 'name' });
      db.createObjectStore('kodomo', { autoIncrement: true });
      db.createObjectStore('shonen', { autoIncrement: true });
      db.createObjectStore('shojo', { autoIncrement: true });
      db.createObjectStore('seinen', { autoIncrement: true }); */
  //
  // name
  // {keyPath: 'email'} || {autoIncrement: true or false}
  /*
     
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
*/

  // WITH LIBRARY LOCALBASE
  // Create a new database
  const db = new Localbase('manga');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  return (
    <div className="App">
      {/* <Add  onChangeHandler={onChangeHandler} dbRequest={dbRequest} /> 👇 */}
      {/*  <Add {...{ onChangeHandler, dbRequest }} /> */}
      <AddWithLibrary {...{ onChangeHandler, db }} />
      <hr />

      {/* Fetch Data */}
      {/* <FetchData {...{ onChangeHandler, dbRequest }} /> */}
      <FetchDataWithLibrary {...{ onChangeHandler, db }} />
      <hr />

      {/* Update Data */}
      {/* <Update {...{ onChangeHandler, dbRequest }} /> */}
      <UpdateWithLibrary {...{ onChangeHandler, db }} />
      <hr />

      {/* Delete */}
      {/* <Delete {...{ onChangeHandler, dbRequest }} /> */}
      <DeleteWithLibrary {...{ onChangeHandler, db }} />
    </div>
  );
}

export default App;
