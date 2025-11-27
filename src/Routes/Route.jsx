import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path:'/menu',
          element: <Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element : <Login> </Login>
        },
        {
          path: '/signup',
          element : <SignUp></SignUp>
        },
        {
          path: '/secret',
          element : <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ],
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>  ,
      children: [
        // normal user routes
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        //admin only routes
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-gold-rho.vercel.app
/menu/${params.id}`)
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);