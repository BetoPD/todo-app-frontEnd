import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuthorized } from '../features/userSlice';
import { Navigate, Outlet } from 'react-router-dom';
export default function ProtectedPages() {
  const authorized = useSelector((state) => state.user.authorized);

  if (!authorized) return <Navigate to="/" />;

  return <Outlet />;
}
