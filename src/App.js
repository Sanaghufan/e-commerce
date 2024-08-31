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
]);
function App() {
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
