import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './page-navbar.css'

const PageNavbar = (props) => {
  return (
    <div className={`page-navbar-container ${props.rootClassName} `}>
      <nav className="page-navbar-navbar">
        <div className="page-navbar-desktop">
          <div className="page-navbar-main">
            <div className="page-navbar-branding"></div>
            <span className="page-navbar-text">{props.text}</span>
          </div>
          <div className="page-navbar-links">
            <a href="#clubs" className="page-navbar-link link">
              {props.Link_1}
            </a>
            <a href="#faq" className="page-navbar-link1 link">
              {props.Link}
            </a>
            <a href="#quotes" className="page-navbar-link2 link">
              {props.Link_4}
            </a>
          </div>
        </div>
        <div id="mobile-menu" className="page-navbar-mobile">
          <div className="page-navbar-top">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="page-navbar-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="page-navbar-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="page-navbar-links1">
            <Link to="/" className="page-navbar-navlink">
              {props.text1}
            </Link>
            <Link to="/" className="page-navbar-navlink1">
              {props.text11}
            </Link>
            <Link to="/" className="page-navbar-navlink2">
              {props.text12}
            </Link>
            <Link to="/" className="page-navbar-navlink3">
              {props.text13}
            </Link>
            <div className="page-navbar-buttons">
              <Link to="/" className="page-navbar-navlink4">
                <div className="page-navbar-btn">
                  <span className="page-navbar-text1">{props.text131}</span>
                </div>
              </Link>
              <Link to="/" className="page-navbar-navlink5">
                <div className="page-navbar-btn1">
                  <span className="page-navbar-text2">{props.text1311}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="page-navbar-container2">
            <Script
              html={` <script>
    /*
    Mobile menu - Code Embed
    */

    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu");

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu");
    const openButton = document.querySelector("#open-mobile-menu");

    if (mobileMenu && closeButton && openButton) {
      // On openButton click, set the mobileMenu position left to -100vw
      openButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(0%)";
      });

      // On closeButton click, set the mobileMenu position to 0vw
      closeButton.addEventListener("click", function () {
        mobileMenu.style.transform = "translateX(100%)";
      });
    }
  </script>`}
            ></Script>
          </div>
        </div>
      </nav>
    </div>
  )
}

PageNavbar.defaultProps = {
  Link_1: 'Clubs',
  text11: 'How it works',
  text131: 'Log in',
  text13: 'Contact',
  image_src: '/pastedimage-cx4wqj.svg',
  text: 'CAMPUS CLUB MANAGEMENT',
  Link_4: 'Testimonials',
  rootClassName: '',
  Link: 'FAQs',
  image_alt: 'image',
  text1: 'Features',
  text12: 'Prices',
  text1311: 'Sign up',
}

PageNavbar.propTypes = {
  Link_1: PropTypes.string,
  text11: PropTypes.string,
  text131: PropTypes.string,
  text13: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  Link_4: PropTypes.string,
  rootClassName: PropTypes.string,
  Link: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  text1311: PropTypes.string,
}

export default PageNavbar
