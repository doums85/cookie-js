// name, version, description, size, callback

// 1) Create Database
const database = openDatabase(
  'manga',
  '1.0',
  'Shonen manga',
  1024 * 1024 * 5,
  function () {
    console.log('DB is created');
  }
);

// 2) Create Table
database.transaction(function (t) {
  console.log(t);
  t.executeSql('CREATE TABLE IF NOT EXISTS shonen (id, name)', [], function () {
    console.log('Table created');
  });
});

// 3) Add item
const id = 2;
const shonenName = 'One Piece';

database.transaction(function (t) {
  t.executeSql(
    'INSERT INTO shonen (id, name) VALUES ("1", "Naruto")',
    [],
    function () {
      console.log('Table added');
    },
    function () {
      console.log('Item NOT created');
    }
  );

  t.executeSql(
    'INSERT INTO shonen (id, name) VALUES (?, ?)',
    [id, shonenName],
    function () {
      console.log('Table added');
    },
    function () {
      console.log('Item NOT created');
    }
  );

  // 4) Fetch data
  t.executeSql(
    'SELECT id, name FROM shonen',
    [],
    function (transaction, results) {
      console.log(results.rows);
    },
    function () {
      console.log('Item NOT created');
    }
  );

  // 5) Update
  t.executeSql(
    'UPDATE shonen SET name="HunterXHunter" WHERE id="1"',
    [],
    function () {
      console.log('Data updated');
    },
    function () {
      console.log('Error updating');
    }
  );

  // 6) Delete data
  t.executeSql(
    'DELETE FROM shonen WHERE id="1"',
    [],
    function () {
      console.log('Data updated');
    },
    function () {
      console.log('Error updating');
    }
  );

  // 7) Delete Table
  t.executeSql(
    'DROP TABLE shonen',
    [],
    function () {
      console.log('Data updated');
    },
    function () {
      console.log('Error updating');
    }
  );
});
