import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Bienvenido a tu task manager
      </h1>
      <Outlet />
    </div>
  );
}
