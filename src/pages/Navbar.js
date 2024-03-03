import React from 'react';
import { NavLink, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../features/userSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const { username, authorized } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  if (!authorized) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="bg-slate-600 h-16 flex justify-end items-center space-x-10 px-4">
        <h1>Hi {username}</h1>
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
        >
          Tasks
        </NavLink>
        <NavLink
          to="/home/profile"
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
        >
          See Profile
        </NavLink>
        <button onClick={handleClick}>Log Out</button>
      </div>
      <Outlet />
    </>
  );
}
