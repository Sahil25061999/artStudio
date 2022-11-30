import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../../context/context_index';
import hero3 from '../../../assets/image/hero image/hero3.webp';

import './signup.css';

export const Signup = () => {
  const [{ name, email, password }, setAuth] = useState({});
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const signUpResp = await axios.post('/api/auth/signup', {
        email: email,
        password: password,
        name: name,
      });
      localStorage.setItem('token', signUpResp.data.encodedToken);
      setIsLoggedIn(true);
      navigate(location.state?.from?.pathname || '/', { replace: true });
      // setToken(signUpResp.data.encodedToken);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="signup-page">
      <section className="hero-section">
        <div className="hero-image-container">
          <img className="responsive-img" src={hero3} alt="" />
        </div>
        <div className="hero-quote-container">
          <h1 className="hero-quote">
            "Art is not what you see but what you make others see."
          </h1>
        </div>
      </section>
      <section className="form-section">
        <form className="form-container ">
          <h2 className="form-title">Sign Up</h2>
          <div className="form-input-container margin-t-b-10">
            <label className="form-label margin-b-5" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="form-input textbox"
              type="text"
              onChange={(e) =>
                setAuth((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="form-input-container margin-t-b-10">
            <label className="form-label margin-b-5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="form-input textbox"
              type="email"
              onChange={(e) =>
                setAuth((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="form-input-container margin-t-b-10">
            <label className="form-label margin-b-5" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="form-input textbox"
              type="password"
              onChange={(e) =>
                setAuth((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <div className="form-input-container margin-t-b-10">
            <button
              className="btn signup-btn"
              onClick={handleSignUp}
              type="submit"
            >
              Sign up
            </button>
          </div>

          <div className="form-input-container margin-t-b-10">
            <p className="text-center">
              Already have an account ?
              <Link className="link-text" to="/login">
                {' '}
                Login
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};
