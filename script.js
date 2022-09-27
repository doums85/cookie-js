'use strict';

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T E   C O O K I E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//
const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('Creating cookie');
  // Key value pairs
  const keyValue = 'userName=mamadou';

  // Expiration
  const now = new Date();
  now.setTime(now.getTime() + 24 * 60 * 60 * 1000);
  const expires = `expires=${now.toUTCString()}`;

  const cookie = `${keyValue};${expires}`;
  console.log(cookie);

  document.cookie = cookie;
});

//
// ──────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: R E T R I E V E   C O O K I E S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//

const getButton = document.getElementById('get-cookie');

getButton.addEventListener('click', () => {
  const cookieKey = prompt('Enter a cookie key');

  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());

  cookies.map((el) => {
    const cookie = el.split('=');

    const key = cookie[0];
    const value = cookie[1];

    if (key === cookieKey) return console.log(value);

    return undefined;
  });
});

//
// ────────────────────────────────────────────────────────────────── III ──────────
//   :::::: U P D A T E   C O O K I E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

const updateButton = document.querySelector('#update-cookie');

updateButton.addEventListener('click', () => {
  const keyValue = 'userName=luffy';

  const now = new Date();
  now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);

  const expires = `expires=${now.toUTCString()}`;

  const cookie = `${keyValue}; ${expires}`;

  document.cookie = cookie;
});


//
// ────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: D E L E T E   C O O K I E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

const deleteButton = document.querySelector('#delete-cookie');

deleteButton.addEventListener('click', () => {
  const keyValue = 'userName=luffy';

  const now = new Date();
  now.setTime(now.getTime() - 1 * 24 * 60 * 60 * 1000);

  const expires = `expires=${now.toUTCString()}`;

  const cookie = `${keyValue}; ${expires}`;

  document.cookie = cookie;
})