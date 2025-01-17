import Login from '../../Pages/Login/Login';
import UseHooks from '../Hook/UseHooks';

const PrivateRoute = ({ children }) => {
  const { user, loading } = UseHooks();
  if (!user) {
    return <Login></Login>;
  }
  if (loading) return <p>Loading....</p>;
  return <div>{children}</div>;
};

export default PrivateRoute;
