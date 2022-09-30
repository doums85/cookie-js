import logo from './logo.svg';
import './App.css';
import {
  ForgotPassword,
  Login,
  Registration,
  UpdateEmail,
  UpdateUser,
} from './components';
import { auth } from './lib/firebase';

function App() {
  const user = auth.currentUser;

  console.log(user);

  return (
    <div className="App">
      <Registration />
      <br /> <br />
      <Login />
      <br /> <br />
      <UpdateUser />
      <br /> <br />
      <UpdateEmail />
      <br /> <br />
      <ForgotPassword />
      <br /> <br />
    </div>
  );
}

export default App;
