import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const ScrolltoAbout = () => {
    const element = document.getElementById("About");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrolltoHome = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrolltoOurWork = () => {
    const element = document.getElementById("ourwork");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ScrolltoContact = () => {
    const element = document.getElementById("demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://wa.me/923352707440?text=Hello%20I%20would%20like%20more%20information%20">
              <i className="icon ion-social-whatsapp"> </i>
            </a>
            <a href="/">
              <i className="icon ion-social-google"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link onClick={ScrolltoHome}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link onClick={ScrolltoAbout}>About</Link>
            </li>
            <li className="list-inline-item">
              <Link onClick={ScrolltoOurWork}>Our Work</Link>
            </li>
            <li className="list-inline-item">
              <Link onClick={ScrolltoContact}>Contact</Link>
            </li>
          </ul>
          <p className="copyright">
            © Copyright Modern Design Gates. All Rights Reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
