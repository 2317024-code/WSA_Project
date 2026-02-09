import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/auth/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Simple validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // Store user data in localStorage with name extracted from email
      const name = email.split("@")[0];
      localStorage.setItem("user", JSON.stringify({ 
        name: name.charAt(0).toUpperCase() + name.slice(1), 
        email, 
        isAuthenticated: true,
        loginTime: new Date().toISOString()
      }));
      
      setLoading(false);
      // Redirect to home
      navigate("/");
    }, 500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Sign in to continue to Synthesia</p>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="input-modern"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-modern"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-link">
          Don't have an account?{" "}
          <a href="/signup">Create one</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
