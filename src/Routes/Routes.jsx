import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Components/Home/Home';
import CardDetail from '../Components/CardDetail/CardDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Card/:id',
        element: <CardDetail></CardDetail>,
        loader: () => fetch('http://localhost:5000/foods'),
      },
    ],
  },
]);
export default router;
