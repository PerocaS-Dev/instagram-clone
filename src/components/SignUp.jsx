import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import instagram_label from "/src/assets/Instagram_label.jpg";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-form-container">
        <div className="label-container">
          <img
            className="landing-label"
            src={instagram_label}
            alt="instagram label"
          />
        </div>
        <p className="signup-string">
          Sign up to see photos and videos from your friends.
        </p>
        <button className="facebook-button">Log in with Facebook</button>
        <div className="weird-or-section">
          <div className="line"></div>
          <div className="or">
            <p>OR</p>
          </div>
          <div className="line"></div>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Mobile Number or email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
        </form>

        <div className="signup-info">
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <Link className="link">Learn More</Link>
          </p>
          <br />
          <p>
            By signing up, you agree to our <Link className="link">Terms</Link>{" "}
            , <Link className="link">Privacy Policy</Link> and{" "}
            <Link className="link">Cookies Policy</Link>.
          </p>
        </div>

        <Link className="signup-link" to="/main-page">
          <button className="signup-button">Sign Up</button>
        </Link>
      </div>

      <div className="signin-section">
        <p>Have an account?</p>
        <Link className="login-link" to="/">
          <p>Log in</p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
