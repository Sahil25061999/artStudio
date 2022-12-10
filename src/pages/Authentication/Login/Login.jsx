import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { checkEmail, checkPassword } from '../../../utils/utils_index';
import { useAuth } from '../../../context/context_index';
import { useDocumentTitle } from '../../../hook/hook_index';
import axios from 'axios';
import hero3 from '../../../assets/image/hero image/hero3.webp';
import '../Signup/signup.css';

export const Login = () => {
  const [{ email, password }, setAuth] = useState({});
  const { auth, dispatchAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!checkEmail(email)) {
      dispatchAuth({ type: 'EMAIL_ERROR', payload: true });
    }
    if (!checkPassword(password)) {
      dispatchAuth({ type: 'PASSWORD_ERROR', payload: true });
      return;
    }

    dispatchAuth({ type: 'EMAIL_ERROR', payload: false });
    dispatchAuth({ type: 'PASSWORD_ERROR', payload: false });

    try {
      const loginResp = await axios.post('/api/auth/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', loginResp.data.encodedToken);
      dispatchAuth({ type: 'SIGN_IN_OUT', payload: true });
      navigate(location.state?.from?.pathname || '/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  useDocumentTitle('Login | ArtStudio');

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
          <h2 className="form-title">Login</h2>
          <div className="form-input-container margin-t-b-10 email-container">
            <label className="form-label margin-b-5" htmlFor="email">
              Email{' '}
              {auth.error.emailErrorMsg && (
                <span className="error-msg">enter valid email</span>
              )}
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
          <div className="form-input-container margin-t-b-10 password-container">
            <label className="form-label margin-b-5" htmlFor="password">
              Password{' '}
              {auth.error.passwordErrorMsg && (
                <span className="error-msg">enter valid password</span>
              )}
            </label>
            <input
              id="password"
              title="password must contain UpperCase,lowercase, alphanumeric characters"
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
              onClick={handleLogin}
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="form-input-container margin-t-b-10">
            <p className="text-center">
              Don't have an account ?{' '}
              <Link className="link-text" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};
