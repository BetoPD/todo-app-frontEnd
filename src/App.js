import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedPages from './pages/ProtectedPages';
import Navbar from './pages/Navbar';
import Tasks from './pages/Tasks';
import EditTask from './pages/EditTask';
import Profile from './pages/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedPages />}>
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Tasks />} />
            <Route path="profile" element={<Profile />} />
            <Route path="edit/:id" element={<EditTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
