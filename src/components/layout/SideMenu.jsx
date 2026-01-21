import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IoIosSettings } from "react-icons/io";
import logo from "../../assets/wsa-logo.jpg";
import "../../css/sidemenu/SideMenu.css";
import { CiUser } from "react-icons/ci";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";

const SideMenu = ({ setView, view }) => {
  const [userName, setUserName] = useState("Guest");
  const navigate = useNavigate();

  useEffect(() => {
    // Get user name from localStorage
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUserName(userData.name || userData.email || "Guest");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getNavBtnClass = (item) =>
    `sidemenu-nav-btn ${view === item ? "active" : ""}`;
  return (
    <>
      <aside className="sidemenu-root">
        {/* Logo */}
        <div className="sidemenu-header">
          <img src={logo} alt="wsa-logo" className="sidemenu-logo-img" />
          <h2 className="sidemenu-logo-title">Synthesia</h2>
        </div>
        {/* Navigation */}
        <nav className="sidemenu-nav" aria-label="Main navigation">
          <ul className="sidemenu-nav-list">
            <li>
              <button
                className={getNavBtnClass("home")}
                onClick={() => setView("home")}
              >
                <AiOutlineHome className="sidemenu-nav-icon" size={18} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setView("search")}
                className={getNavBtnClass("search")}
              >
                <AiOutlineSearch className="sidemenu-nav-icon" size={18} />
                <span> Search</span>
              </button>
            </li>
            <li>
              <button
                className={getNavBtnClass("favourite")}
                onClick={() => setView("favourite")}
              >
                <AiOutlineHeart size={18} />
                <span>Favourite</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex-1"></div>
        <div className="sidemenu-profile-row">
          <div className="profile-placeholder">
            <CiUser size={30} />
          </div>

          <div className="sidemenu-username-wrapper">
            <div className="sidemenu-username">{userName}</div>
          </div>
          <div className="settings-container">
            <button 
              type="button" 
              className="sidemenu-settings-btn"
              onClick={handleLogout}
              title="Logout"
            >
              <IoIosSettings size={20} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
