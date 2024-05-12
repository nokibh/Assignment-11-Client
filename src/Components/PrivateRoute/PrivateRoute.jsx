import Login from '../../Pages/Login/Login';
import UseHooks from '../Hook/UseHooks';

const PrivateRoute = ({ children }) => {
  const { user } = UseHooks();
  if (!user) {
    return <Login></Login>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
