import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmitHandler(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.displayName = name;
        console.log('User created');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <h2>Registration</h2>
      <input
        onChange={(e) => onChangeHandler(e)(setName)}
        type="text"
        placeholder="Your name"
      />
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
        value="Register"
      />
    </div>
  );
}
