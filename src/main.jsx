import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Views
import HomeView from "./views/HomeView";
import ProductDetailView from "./views/ProductDetailView";
import ProductsView from "./views/ProductsView";
import Login from "./views/Login/login";
import Register from "./views/Login/register";
import AddProduct from "./views/Admin/Products/addProduct";

// Faqs
import Faqs from "./views/Faqs/Faqs";

// Tailwindcss base
import "./index.css";
import BaseLayout from "./layouts/BaseLayout";
import ErrorView from "./views/ErrorView";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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