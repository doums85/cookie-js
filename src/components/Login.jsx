import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const user = {
  email: 'user@example.com',
  password: '123456',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  const onChangeHandler = (e) => (setState) => setState(e.target.value);

  function onSubmmitHandler(e) {
    e.preventDefault();

    if (email === user.email && password === user.password) {
     return navigation('/home')
    }

    alert('Something wrong 😬' );
  }

  return (
    <div>
      <h1>Login Screen</h1>

      {/* form */}
      <form>
        <div>
          <input
            onChange={(e) => onChangeHandler(e)(setEmail)}
            type="email"
            placeholder="Enter your email"
            required
          />
          <input
            onChange={(e) => onChangeHandler(e)(setPassword)}
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <input
          onClick={(e) => onSubmmitHandler(e)}
          type="submit"
          value="Connection"
        />
      </form>
    </div>
  );
}
