import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Views
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/User/ProductDetailView";
import ProductsView from "./views/User/ProductsView";
import AddProduct from "./views/Admin/Products/addProduct";
import Login from "./views/User/Login/login";
import Register from "./views/User/Login/register";

// Faqs
import Faqs from "./views/User/Faqs/Faqs";

// Tailwindcss base
import "./index.css";
import BaseLayout from "./layouts/BaseLayout";
import ErrorView from "./views/ErrorView";

const user = JSON.parse(localStorage.getItem("result"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/products",
        element: <ProductsView />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailView />,
      },

      {
        path: "/login",
        element: user && user.success ? <Navigate to="/" /> : <Login /> ,
      },
      {
        path: "/register",
        element: user && user.success ? <Navigate to="/" /> : <Register /> ,
      },

      {
        path: "/add-product",
        element: <AddProduct />,
      },

      // page Faqs
      {
        path: "/faqs",
        element: <Faqs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
