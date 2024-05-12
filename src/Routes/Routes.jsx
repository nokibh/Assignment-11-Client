import { createBrowserRouter } from 'react-router-dom';
import Main from '../Main/Main';
import Home from '../Components/Home/Home';
import CardDetail from '../Components/CardDetail/CardDetail';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import AllFoods from '../Components/AllFoods/AllFoods';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import TopFoodDetail from '../Components/TopFoodDetail/TopFoodDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            {' '}
            <CardDetail></CardDetail>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/foods'),
      },
      {
        path: '/Top/:id',
        element: <TopFoodDetail></TopFoodDetail>,

        loader: () => fetch('http://localhost:5000/tops'),
      },
    ],
  },
]);
export default router;
