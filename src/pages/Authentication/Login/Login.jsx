import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { useToken } from '../../../context/context_index';
import hero3 from '../../../assets/image/hero image/hero3.webp';

import '../Signup/signup.css';

export const Login = () => {
  const [{ email, password }, setAuth] = useState({});
  // const { token, setToken } = useToken();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResp = await axios.post('/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', loginResp.data.encodedToken);
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
        <h2 className="form-title">Login</h2>
        <form className="form-container ">
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
          {/* <div className="form-input-container margin-t-b-10">
            <label className="form-label margin-b-5" htmlFor="re-password">
              Confirm Password
            </label>
            <input
              id="password"
              className="form-input textbox"
              type="password"
            />
          </div> */}
          <div className="form-input-container margin-t-b-10">
            <button
              className="btn signup-btn"
              onClick={handleLogin}
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="form-input-container margin-t-b-10">
            <p className="text-center">Don't have an account ? Sign Up</p>
          </div>
        </form>
      </section>
    </main>
  );
};
