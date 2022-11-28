import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './SideNavbar.css';

export const SideNavbar = () => {
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
