import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from '../components_index';
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
      <header className="navigation ">
        <div className="logo-container ">
          <h2 className="title">
            Art<span className="title-studio">Studio</span>
          </h2>
        </div>
        {(() => {
          if (currentPath !== '/login' && currentPath !== '/signup') {
            return (
              <nav className="navigation-menu">
                <ul className="navigation-list list-style-none d-flex">
                  <li className="navigation-item">
                    <Search />
                  </li>
                  <li className="navigation-item">
                    <a href="#" className="navigation-link btn">
                      signup
                    </a>
                  </li>
                </ul>
              </nav>
            );
          }
        })()}
      </header>
      {/* <header className="navigation navigation-responsive">
        <div className="logo-container">
          <h2>Navbar</h2>
        </div>
        <button className="drawer-btn btn" onClick={() => handleDrawer()}>
          <span className="fa-solid fa-bars"></span>
        </button>
        <nav
          className="navigation-menu"
          style={
            drawerClicked && !drawerClose
              ? { transform: 'translateX(0%)' }
              : { transform: 'translateX(120%)' }
          }
        >
          <ul className="navigation-list list-style-none">
            <li className="navigation-item">
              <input className="textbox" type="text" />
              <button className="btn btn-only-icon btn-square">
                <span className="fa-solid fa-magnifying-glass"></span>
              </button>
            </li>
            <li className="navigation-item">Home</li>
            <li className="navigation-item">Like</li>
            <li className="navigation-item">Watch later</li>
            <li
              className="navigation-item drawer-close-btn"
              onClick={() => handleDrawer()}
            >
              close
            </li>
          </ul>
        </nav>
      </header> */}
    </>
  );
};
