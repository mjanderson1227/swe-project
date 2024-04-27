
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import './index.css';
import LoginPage from './pages/LoginPage';
import CreateAccount from './pages/CreateAccount';
import HomePage from './pages/HomePage';
import ForgotPassword from "./pages/ForgotPasswordPage.jsx";
import Test from "./pages/test";
import axios from "axios";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  },
  {
    path: "/Home",
    element: <HomePage />,
  },
  {
    path: '/ForgotPasswordPage',
    element: <ForgotPassword />,
  },
  {

    path: "/Test",
    element: <Test />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
