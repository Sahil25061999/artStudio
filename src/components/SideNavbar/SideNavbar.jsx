import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/context_index';
import { getToken } from '../../utils/utils_index';
import './SideNavbar.css';

export const SideNavbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const token = getToken();
  useEffect(() => {
    token?.length ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  return (
    <div className="side-navbar">
      <ul className="list-style-none side-nav-list">
        <li>
          <NavLink className="side-nav-item" to="/">
            <span className="side-nav-text">Home</span>
            <span className="fas fa-home-lg-alt side-nav-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink className="side-nav-item" to="watchlater">
            <span className="side-nav-text"> Watch later</span>
            <span className="fas fa-clock side-nav-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink className="side-nav-item" to="history">
            <span className="side-nav-text">History</span>
            <span className="fas fa-history side-nav-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink className="side-nav-item" to="playlist">
            <span className="side-nav-text">playlist</span>
            <span className="fas fa-list side-nav-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink className="side-nav-item" to="likedlist">
            <span className="side-nav-text">Liked</span>
            <span className="fas fa-heart side-nav-icon"></span>
          </NavLink>
        </li>
        <li>
          {!isLoggedIn ? (
            <NavLink className="side-nav-item" to="login">
              <span className="side-nav-text">Login</span>
              <span className="fa-solid fa-user side-nav-icon"></span>
            </NavLink>
          ) : (
            <button
              className="logout-btn side-nav-item"
              onClick={() => {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
                navigate('/login', { replace: true });
              }}
            >
              <span className="side-nav-text">Logout</span>
              <span className="fa-solid fa-user side-nav-icon"></span>
            </button>
          )}
        </li>
        {/* <li>
          <NavLink className="side-nav-item" to="signup">
            <span className="side-nav-text">Signup</span>
            <span className="fa-solid fa-user-plus side-nav-icon"></span>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};
