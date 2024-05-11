import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Components/Home/Home';
import CardDetail from '../Components/CardDetail/CardDetail';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AllFoods from '../Components/AllFoods/AllFoods';

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
        path: 'login',
        element: <Login></Login>,
      },

      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: '/allFoods',
        element: <AllFoods></AllFoods>,
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
