import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  // Protected route component
  const ProtectedRoute = ({ component: Component }) => {
    const user = localStorage.getItem("user");
    return user ? <Component /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Home - Protected */}
        <Route path="/" element={<ProtectedRoute component={Homepage} />} />
        {/* Login */}
        <Route path="/login" element={<Login />} />
        {/* Signup */}
        <Route path="/signup" element={<Signup />} />
        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
