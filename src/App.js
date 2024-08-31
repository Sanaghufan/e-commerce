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
]);
function App() {
  return (
    <div className="App">
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
