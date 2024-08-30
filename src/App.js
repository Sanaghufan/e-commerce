import React from "react";

import "./App.css";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import { Signup } from "./features/auth/components/Signup";

function App() {
  return (
    <div className="App">
      <Signup></Signup>
    </div>
  );
}

export default App;
