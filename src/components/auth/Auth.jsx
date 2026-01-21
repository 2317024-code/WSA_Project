import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/auth/Auth.css";

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <button 
        className="auth-btn signup"
        onClick={() => navigate("/signup")}
      >
        Signup
      </button>
      <button 
        className="auth-btn login"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Auth;
