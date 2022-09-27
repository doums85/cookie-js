import logo from './logo.svg';
import './App.css';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { useState } from 'react';
import { setCookie } from './hooks';
import { PrimaryButton } from './components';
import Cookie from 'js-cookie';

function App() {
  const checkCookie = () =>
    getCookieConsentValue('allow') === 'true' ? true : false; // false
  // checkCookie = false
  const [allow, setAllow] = useState(checkCookie());
  const allowHandler = () => setAllow(checkCookie());

  const userName = 'mamadou';
  const password = '123456';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <h1>
          {allow
            ? 'I can use your cookie 🍪'
            : "Damn ! I can't use your cookie 🥹"}{' '}
        </h1>
        <PrimaryButton />
      </header>
      <CookieConsent
        cookieSecurity={true}
        cookieName="allow"
        expires={10}
        location="top"
        onAccept={allowHandler}
        onDecline={allowHandler}
        declineButtonStyle={{ backgroundColor: '#000' }}
        enableDeclineButton>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero.
      </CookieConsent>
    </div>
  );
}

export default App;
