import './App.css';
import { Home, Login} from './components';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Login />}/>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
