import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import RegisterHandler from './components/RegisterHandler';
import RegisterGoogle from './components/RegisterGoogle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register-handler' element={<RegisterHandler />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/register/google/auth' element={<RegisterGoogle />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
