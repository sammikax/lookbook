import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home/home';
import Login from '../pages/Login/Login';
import Books from '../pages/Books/Books';
import Profile from '../pages/Profile/profile';
import { getActiveUser } from '../LocalStorage';
import Membership from '../pages/Membership/Membership';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/login" element={<Login />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/membership' element={<Membership />} />
      <Route path='/' element={<PrivateRoute />} />
    </Routes>
  );
}

const PrivateRoute = () => {
  const activeUser = getActiveUser();
  if (activeUser == null) {
    return <Navigate to={"/login"} />;
  }
  return <Books />;
}

export default Routers;
