import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { Search } from '../components_index';
import { useAuth } from '../../context/context_index';
import { getToken } from '../../utils/utils_index';
import logo from '../../assets/logo/ArtStudio logo.svg';

import './Navbar.css';

export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [drawerClicked, setDrawerClickState] = useState(false);
  const [drawerClose, setDrawerCloseState] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const token = getToken();

  const { pathname: currentPath } = location;
  const handleDrawer = () => {
    setDrawerCloseState(!drawerClose);
    setDrawerClickState(!drawerClicked);
  };
  // useEffect(() => {
  //   token?.length ? setIsLoggedIn(true) : setIsLoggedIn(false);
  // }, []);

  return (
    <>
      <div className="navigation-container">
        <header className="navigation">
          <NavLink to="/">
            <div className="logo-container ">
              <img className="logo-image" src={logo} />
              <h3 className="title">
                Art<span className="title-studio">Studio</span>
              </h3>
            </div>
          </NavLink>

          {(() => {
            if (currentPath !== '/login' && currentPath !== '/signup') {
              return (
                <nav className="navigation-menu">
                  <ul className="navigation-list list-style-none d-flex">
                    <li className="navigation-item">
                      <Search />
                    </li>
                    <li className="navigation-item">
                      {!isLoggedIn ? (
                        <NavLink
                          className=" auth-btn btn btn-only-icon btn-square"
                          to="login"
                        >
                          <span className="fa-solid fa-user navigation-icon"></span>
                          <span className="">Login</span>
                        </NavLink>
                      ) : (
                        <button
                          className="auth-btn btn btn-only-icon btn-square"
                          onClick={() => {
                            localStorage.removeItem('token');
                            setIsLoggedIn(false);
                            navigate('/login', { replace: true });
                          }}
                        >
                          <span className="fa-solid fa-user navigation-icon"></span>
                          <span className="">logout </span>
                        </button>
                      )}
                    </li>
                  </ul>
                </nav>
              );
            }
          })()}
        </header>
      </div>
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
