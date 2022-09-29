import { useState } from 'react';

export default function Update({ onChangeHandler, db }) {
  const [found, setFound] = useState(false);
  const [textEntered, setTextEntered] = useState('');
  const [mangaName, setMangaName] = useState('');
  const [mangaDescription, setMangaDescription] = useState('');
  const [mangaAuthor, setMangaAuthor] = useState('');

  function searchHandler(e) {
    e.preventDefault();

    db.collection('shonen')
      .doc({ name: textEntered })
      .get()
      .then((document) => {
        if (!document) return alert('No document found 😬');

        setFound(true);
        setMangaName(document.name);
        setMangaAuthor(document.author);
        setMangaDescription(document.description);
      });
  }

  function updateHandler(e) {
    e.preventDefault();
    // Update all documents in the collection
    db.collection('shonen')
      .get()
      .then((document) => {
        document.map((shonen) =>
          db
            .collection('shonen')
            .doc({ name: shonen.name })
            .update({ country: 'Japan' })
        );
      });

    // Update a document in the collection
    db.collection('shonen').doc({ name: textEntered }).update({
      author: mangaAuthor,
    });

    // Set methods fields is required
    db.collection('shonen').doc({ name: textEntered }).set({
      name: mangaName,
      author: mangaAuthor,
      description: mangaDescription,
      country: 'Japan',
    });
  }

  return (
    <div>
      <h1>Update Data With Library</h1>

      <form>
        <div>
          <div className="search">
            <input
              onChange={(e) => onChangeHandler(e)(setTextEntered)}
              type="text"
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
