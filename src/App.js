import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedPages from './pages/ProtectedPages';
import Navbar from './pages/Navbar';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route element={<ProtectedPages />}>
          <Route path="/home" element={<Navbar />}>
            <Route index element={<Tasks />} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
