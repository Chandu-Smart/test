import './App.css';
import Main from './components/landingPage/Main';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import SignUp from './components/signup/SignUp';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
