import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { username, email } = useSelector((state) => state.user);
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col space-y-4 bg-slate-500 rounded-md p-2 max-h-md">
        <h1 className="text-center text-4xl">Profile</h1>
        <h3>Username: {username}</h3>
        <h4>Email: {email}</h4>
      </div>
    </div>
  );
}
