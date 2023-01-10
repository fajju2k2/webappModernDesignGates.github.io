import React, { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import logo from "./images/logo.png";
import "./Navbar.css";
import Work from "./Work";
import Workbalcony from "./Workbalcony";
import Workgates from "./Workgates";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
    <Fragment>
      <div className="header">
        <nav className="navbar">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: "#ffffff" }} />
            ) : (
              <FaBars size={30} style={{ color: "#ffffff" }} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link onClick={ScrolltoHome}>Home</Link>
            </li>

            <li className="nav-item">
              <Link onClick={ScrolltoAbout}>About</Link>
            </li>

            <li className="nav-item">
              <Link onClick={ScrolltoOurWork}>Our Work</Link>
            </li>
            <li className="nav-item">
              <Link onClick={ScrolltoContact}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="hero" id="hero">
          <div className="content">
            <h1>Modern Styles of Almunium</h1>
          </div>
        </div>
      </div>
      <Hero />
      <About />
      <Work />
      <Workgates />
      <Workbalcony />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Navbar;
