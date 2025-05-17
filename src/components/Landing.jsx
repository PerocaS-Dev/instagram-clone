import React from "react";
import { Route } from 'react-router-dom';
import "./Landing.css";
import { Link } from "react-router-dom";
import instagram_label from "/src/assets/Instagram_label.jpg";
import design from "/src/assets/design.png";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-design">
          <img
            className="design-picture"
            src={design}
            alt="the design picture"
          />
        </div>
        <div className="login-section">
          <div className="landing-form-container">
            <div className="label-container">
              <img
                className="landing-label"
                src={instagram_label}
                alt="instagram label"
              />
            </div>
            <form className="login-form">
              <input
                type="text"
                placeholder="Phone number, username, or email"
              />
              <input type="password" placeholder="Password" />
              <Link className ="login-link"to ="/main-page"><button className="login-button">Log in</button></Link>
              
            </form>
            <div className="weird-or-section">
              <div className="line"></div>
              <div className="or">
                <p>OR</p>
              </div>
              <div className="line"></div>
            </div>

            <div className="facebook-login">
              <p>Log in with Facebook</p>
            </div>

            <p className="forgot-password">Forgot password?</p>
            <br />
            <p className="with-account">Don't have an account? <Link className ="signup-link"to ="/signup">Sign up</Link></p>
          </div>
        </div>
      </div>
      <div className="landing-footer">
        <Route component={Footer}/>
      </div>
    </>
  );
};

export default Landing;
