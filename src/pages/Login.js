import { useState, useEffect } from 'react';
import {
  loginUser,
  clearErrorMessage,
  setNotAuthorized,
  vToken,
} from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { errorMessage, authorized } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setPassword('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearErrorMessage());
    }, 5000);

    return () => clearTimeout(timer);
  }, [errorMessage, dispatch]);

  useEffect(() => {
    const cookies = Cookies.get('token');

    if (!cookies) {
      dispatch(setNotAuthorized());
      return;
    }

    dispatch(vToken());
  }, [dispatch]);

  if (authorized) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {errorMessage && (
          <div className="bg-red-500 p-2 text-white">
            <p>{errorMessage}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <button type="submit">Login</button>
          <div className="flex justify-between items-center mt-4">
            <p>Do not have an account?</p>
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
