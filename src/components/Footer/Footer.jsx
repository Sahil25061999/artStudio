import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="list-style-none  footer-links-list">
        <li className="footer-links ">
          <a className="footer-link-items" href="instagram.com">
            <span className="fa-brands fa-linkedin-in "></span>
            Linkedin
          </a>
        </li>
        <li className="footer-links ">
          <a className="footer-link-items" href="#">
            <span className="fa-brands fa-github "></span>
            Github
          </a>
        </li>
        <li className="footer-links ">
          <a className="footer-link-items" href="">
            <span className="fa-brands fa-instagram "></span>
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
