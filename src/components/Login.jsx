import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../lib/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmitHandler(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('User logged in successfully');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <div>
      <h2>Registration</h2>
      <input
        onChange={(e) => onChangeHandler(e)(setEmail)}
        type="email"
        placeholder="@email"
      />
      <input
        onChange={(e) => onChangeHandler(e)(setPassword)}
        type="password"
        placeholder="password"
      />
      <input
        onClick={(e) => onSubmitHandler(e)}
        type="submit"
        value="Login"
      />
    </div>
  );
}
