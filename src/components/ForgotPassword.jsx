import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmitHandler(e) {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
      console.log("Profile updated!");
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        onChange={(e) => onChangeHandler(e)(setEmail)}
        type="email"
        placeholder="@email"
      />
      <input onClick={(e) => onSubmitHandler(e)} type="submit" value="Update User" />
    </div>
  );
}
