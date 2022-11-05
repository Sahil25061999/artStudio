import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [drawerClicked, setDrawerClickState] = useState(false);
  const [drawerClose, setDrawerCloseState] = useState(true);
  const location = useLocation();
  const { pathname: currentPath } = location;
  const handleDrawer = () => {
    setDrawerCloseState(!drawerClose);
    setDrawerClickState(!drawerClicked);
  };

  return (
    <>
      <header className="navbar ">
        <div className="logo-container ">
          <h2 className="title">
            Art<span className="title-studio">Studio</span>
          </h2>
        </div>
        {(() => {
          if (currentPath !== '/login' && currentPath !== '/signup') {
            return (
              <>
                <div className="search-container">
                  <input className="textbox" type="text" />
                  <button className="btn btn-only-icon btn-square search-btn">
                    <span className="fa-solid fa-magnifying-glass"></span>
                  </button>
                </div>
                <nav className="navbar-menu">
                  <ul className="navbar-list list-style-none">
                    <li className="navbar-item">
                      <a href="#" className="navbar-link btn ">
                        home
                      </a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" className="navbar-link btn">
                        login
                      </a>
                    </li>
                    <li className="navbar-item">
                      <a href="#" className="navbar-link btn">
                        signup
                      </a>
                    </li>
                  </ul>
                </nav>
              </>
            );
          }
        })()}
      </header>
      <header className="navbar navbar-responsive">
        <div className="logo-container">
          <h2>Navbar</h2>
        </div>
        <button className="drawer-btn btn" onClick={() => handleDrawer()}>
          <span className="fa-solid fa-bars"></span>
        </button>
        <nav
          className="navbar-menu"
          style={
            drawerClicked && !drawerClose
              ? { transform: 'translateX(0%)' }
              : { transform: 'translateX(120%)' }
          }
        >
          <ul className="navbar-list list-style-none">
            <li className="navbar-item">
              <input className="textbox" type="text" />
              <button className="btn btn-only-icon btn-square">
                <span className="fa-solid fa-magnifying-glass"></span>
              </button>
            </li>
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Like</li>
            <li className="navbar-item">Watch later</li>
            <li
              className="navbar-item drawer-close-btn"
              onClick={() => handleDrawer()}
            >
              close
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
