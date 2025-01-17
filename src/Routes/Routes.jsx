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
import AddFood from '../Components/AddFood/AddFood';
import MyAddFood from '../Components/MyAddFood/MyAddFood';
import Update from '../Components/Update/Update';
import MyOrder from '../Components/MyOrder/MyOrder';
import Gallery from '../Components/Gallery/Gallery';
import Purchase from '../Components/Purchase/Purchase';
import PurRequest from '../Components/PurRequest/PurRequest';
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
        path: '/request',
        element: (
          <PrivateRoute>
            <PurRequest></PurRequest>
          </PrivateRoute>
        ),
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
        loader: () =>
          fetch('https://assignment-11-server-site-xi.vercel.app/foods'),
      },
      {
        path: '/Top/:id',
        element: (
          <PrivateRoute>
            <TopFoodDetail></TopFoodDetail>
          </PrivateRoute>
        ),

        loader: () =>
          fetch('https://assignment-11-server-site-xi.vercel.app/tops'),
      },
      {
        path: 'addFood',
        element: (
          <PrivateRoute>
            {' '}
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: 'myFood',
        element: (
          <PrivateRoute>
            <MyAddFood></MyAddFood>
          </PrivateRoute>
        ),
      },
      {
        path: 'updateFood/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-server-site-xi.vercel.app/tops/${params.id}`
          ),
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
        loader: () =>
          fetch('https://assignment-11-server-site-xi.vercel.app/foods'),
      },
      {
        path: '/purchase/:id',
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),

        loader: () =>
          fetch('https://assignment-11-server-site-xi.vercel.app/tops'),
      },
    ],
  },
]);
export default router;
