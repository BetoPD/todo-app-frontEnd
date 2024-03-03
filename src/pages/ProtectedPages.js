import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedPages() {
  const { authorized, isLoading } = useSelector((state) => state.user);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!authorized && !isLoading) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
