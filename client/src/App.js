import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import EditPost from './components/EditPost';
import CreatePost from './components/CreatePost';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Register from './components/Register';
import ViewPost from './components/ViewPost';
import Logout from './components/Logout';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      setUser(user);
    }
  }
  , []);
  return (
    <div>
      <Navbar />
      <br />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditPost/>} />
        <Route path="/posts" element={<ViewPost/>} />
        <Route path="/create" element={<CreatePost/>} />
        <Route path="/user/" element={<UserPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
