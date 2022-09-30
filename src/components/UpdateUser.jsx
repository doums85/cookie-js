import { updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function UpdateUser() {
  const [name, setName] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmitHandler(e) {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
        console.log('Profile updated!');
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        onChange={(e) => onChangeHandler(e)(setName)}
        type="text"
        placeholder="user name"
      />
      <input
        onClick={(e) => onSubmitHandler(e)}
        type="submit"
        value="Update User"
      />
    </div>
  );
}
