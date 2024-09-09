import React from "react";

import "./App.css";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { Signup } from "./features/auth/components/Signup";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import { ProductList } from "./features/product-list/components/Product";
import ProductDetail from "./features/product-list/components/ProductDetail";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <Home/>
    ),
  },
  {
    path: "/login",
    element:<LoginPage/>,
  },
  {
    path: "/signup",
    element:<Signup/>,
  },
  {
    path: "/cart",
    element:<CartPage/>,
  },
  {
    path: "/checkout",
    element:<Checkout/>,
  },
  {
    path: "/product-detail",
    element:<ProductDetailPage/>,
  },
]);
function App() {
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
