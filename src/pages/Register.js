import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, registerUser } from '../features/userSlice';
import { Link } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearErrorMessage());
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, username }));
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        {error && (
          <div className="bg-red-500 p-2 text-white">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            placeholder="username"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            value={email}
            placeholder="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            value={password}
            placeholder="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-800 text-white px-4 py-2 rounded-md my-2"
          />
          <button type="submit">Register</button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <p>Already have an account?</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
