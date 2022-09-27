import Cookie from 'js-cookie';

const setCookie = (cookieKey, cookieValue) =>
  Cookie.set(cookieKey, cookieValue, {
    expires: 2,
    secure: true,
    sameSite: 'strict',
    path: '/',
  });

export default setCookie;
