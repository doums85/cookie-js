import { useState } from 'react';

export default function Update({ onChangeHandler, dbRequest }) {
  const [found, setFound] = useState(false);
  const [textEntered, setTextEntered] = useState('');
  const [mangaName, setMangaName] = useState('');
  const [mangaDescription, setMangaDescription] = useState('');
  const [mangaAuthor, setMangaAuthor] = useState('');

  function searchHandler(e) {
    e.preventDefault();

    // 2) Get the collection's data
    const transaction = dbRequest.transaction('shonen');
    const store = transaction.objectStore('shonen');

    const request = store.get(Number(textEntered));

    request.onsuccess = function (event) {
      const manga = event.target.result;
      if (!manga) return;
      setMangaName(manga.name);
      setMangaAuthor(manga.author);
      setMangaDescription(manga.description);
      setFound(true);
    };

    request.onerror = function (event) {
      console.log(`Something went wrong : ${event.error.message}`);
    };
  }

  function updateHandler(e) {
    e.preventDefault();

    if (!found) return alert('Please enter correct index');
    const updateManga = {
      name: mangaName,
      author: mangaAuthor,
      description: mangaDescription,
    };

    // 2) Get the collection's data
    const transaction = dbRequest.transaction('shonen', 'readwrite');
    const store = transaction.objectStore('shonen');
    // 1 -> data ; 2-> id CONVERT TO NUMBER
    const request = store.put(updateManga, Number(textEntered));

    request.onsuccess = function (event) {
      console.log(`Successfully updated`);
    };
    request.onerror = function (event) {
      console.log(`Something went wrong : ${event.error.message}`);
    };
  }

  return (
    <div>
      <h1>Update Data</h1>

      <form>
        <div>
          <div className="search">
            <input
              onChange={(e) => onChangeHandler(e)(setTextEntered)}
              type="number"
              placeholder="Search index..."
            />
            <input
              onClick={(e) => searchHandler(e)}
              type="submit"
              value="Search"
            />
          </div>
          <input
            onChange={(e) => onChangeHandler(e)(setMangaName)}
            type="text"
            value={mangaName}
            placeholder="Manga's name"
          />
          <input
            onChange={(e) => onChangeHandler(e)(setMangaDescription)}
            type="text"
            value={mangaDescription}
            placeholder="Description"
          />
          <input
            onChange={(e) => onChangeHandler(e)(setMangaAuthor)}
            type="text"
            value={mangaAuthor}
            placeholder="Who wrote it ?"
          />
        </div>

        <input onClick={(e) => updateHandler(e)} type="submit" value="Update" />
      </form>
    </div>
  );
}
