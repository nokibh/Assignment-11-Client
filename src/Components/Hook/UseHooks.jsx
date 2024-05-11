import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UseHooks = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default UseHooks;
