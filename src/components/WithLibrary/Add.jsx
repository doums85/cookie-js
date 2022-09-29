import { useState } from 'react';

export default function Add({ onChangeHandler, db }) {
  const [mangaName, setMangaName] = useState('');
  const [mangaDescription, setMangaDescription] = useState('');
  const [mangaAuthor, setMangaAuthor] = useState('');
  const [url, setUrl] = useState(null);

  async function addMangaHandler(e) {
    e.preventDefault();

    await db.collection('shonen').add({
      name: mangaName,
      image: url,
      author: mangaAuthor,
      description: mangaDescription,
    });

    alert(`${mangaName} added successfully`);
  }

  function onChangeInput(e) {
    console.log(e.target.files[0]);

    setUrl(e.target.files[0]);
  }

  return (
    <div>
      <h1>Create Manga With Library</h1>

      <form>
        <div>
          <input onChange={(e) => onChangeInput(e)} type="file" />
          <img src={url} alt="" />
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
