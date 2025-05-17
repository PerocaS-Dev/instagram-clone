import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import instagram_label from "/src/assets/Instagram_label.jpg";
import design from "/src/assets/design.png";

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
        <div className="footer-nav">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>
        <div className="footer-info">
          <span>
            <select name="Languages" id="languages">
              <option value="english">English</option>
              <option value="english">Zulu</option>
              <option value="english">Xhosa</option>
              <option value="english">Ndebele</option>
              <option value="english">Swati</option>
              <option value="english">Tsonga</option>
              <option value="english">Venda</option>
              <option value="english">Sotho</option>
              <option value="english">Pedi</option>
              <option value="english">Tswana</option>
              <option value="english">Afrikaans</option>
            </select>
          </span>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </div>
    </>
  );
};

export default Landing;
