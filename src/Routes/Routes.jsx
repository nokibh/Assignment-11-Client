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
        element: (
          <PrivateRoute>
            <TopFoodDetail></TopFoodDetail>
          </PrivateRoute>
        ),

        loader: () => fetch('http://localhost:5000/tops'),
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
          fetch(`http://localhost:5000/tops/${params.id}`),
      },
      {
        path: '/order',
        element: <MyOrder></MyOrder>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/purchase/:id',
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),

        loader: () => fetch('http://localhost:5000/tops'),
      },
    ],
  },
]);
export default router;
