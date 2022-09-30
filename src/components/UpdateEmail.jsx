import { updateEmail, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../lib/firebase';

export default function UpdateEmail() {
  const [email, setEmail] = useState('');

  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmitHandler(e) {
    e.preventDefault();

    updateEmail(auth.currentUser, email)
      .then(() => {
        // Email updated!
        // ...
        console.log('email updated successfully');
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
        onChange={(e) => onChangeHandler(e)(setEmail)}
        type="email"
        placeholder="@email"
      />
      <input
        onClick={(e) => onSubmitHandler(e)}
        type="submit"
        value="Update Email"
      />
    </div>
  );
}
