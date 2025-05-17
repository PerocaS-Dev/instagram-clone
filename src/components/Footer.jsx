import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
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
        <span>© 2025 Instagram Clone By Peroca</span>
      </div>
    </div>
  );
};

export default Footer;
