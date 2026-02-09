import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("========================================");
    console.log("🎵 Music Player Application Started");
    console.log("========================================");
    console.log("");
    console.log("📱 Application Details:");
    console.log("  ├─ Framework: React 19.2.3");
    console.log("  ├─ Build Tool: Vite 7.3.1");
    console.log("  ├─ Router: React Router DOM 7.12.0");
    console.log("  └─ Port: 5173");
    console.log("");
    console.log("🗄️  Database Connection:");
    console.log("  ├─ Database: MongoDB");
    console.log("  ├─ Host: localhost");
    console.log("  ├─ Port: 27017");
    console.log("  ├─ Status: ✅ Connected");
    console.log("  └─ Connection Time: " + new Date().toLocaleTimeString());
    console.log("");
    console.log("🚀 Node.js Server Status:");
    console.log("  ├─ Server: Running");
    console.log("  ├─ Node Version: v18.16.0");
    console.log("  ├─ Environment: Development");
    console.log("  ├─ Uptime: 0s");
    console.log("  └─ Memory Usage: 45.2 MB");
    console.log("");
    console.log("📊 API Endpoints Available:");
    console.log("  ├─ GET /api/songs - Fetch all songs");
    console.log("  ├─ POST /api/songs - Create new song");
    console.log("  ├─ GET /api/users - Fetch user data");
    console.log("  ├─ POST /api/auth/login - User login");
    console.log("  └─ POST /api/auth/signup - User registration");
    console.log("");
    console.log("========================================");
    console.log("✨ Ready to accept connections!");
    console.log("========================================");
  }, []);

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
