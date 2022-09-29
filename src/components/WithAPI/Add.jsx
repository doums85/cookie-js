import { useState } from 'react';

export default function Add( { dbRequest, onChangeHandler }) {
  const [mangaName, setMangaName] = useState('');
  const [mangaDescription, setMangaDescription] = useState('');
  const [mangaAuthor, setMangaAuthor] = useState('');


  // Add manga to database
  function addMangaHandler(e) {
    e.preventDefault();

    if (!dbRequest) {
      return alert('There was an error try later...');
    }
    // Options: readonly(default) || readwrite || versionchange
    const transaction = dbRequest.transaction('josei', 'readwrite');
    const store = transaction.objectStore('josei');

    const request = store.add({
      name: mangaName,
      author: mangaAuthor,
      description: mangaDescription,
    });

    request.onsuccess = function () {
      alert(`Your manga has been added : ${mangaName}`);
    };

    request.onerror = function () {
      alert('Something went wrong');
    };
  }

  return (
    <div>
      <h1>Create Manga</h1>

      <form>
        <div>
          <input
            onChange={(e) => onChangeHandler(e)(setMangaName)}
            type="text"
            placeholder="Manga's name"
          />
          
          <input
            onChange={(e) => onChangeHandler(e)(setMangaDescription)}
            type="text"
            placeholder="Description"
          />
          <input
            onChange={(e) => onChangeHandler(e)(setMangaAuthor)}
            type="text"
            placeholder="Who wrote it ?"
          />
        </div>

        <input type="submit" onClick={(e) => addMangaHandler(e)} value="Add" />
      </form>
    </div>
  );
}
