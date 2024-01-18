import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <nav className={`navbar-navbar ${props.rootClassName} `}>
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-branding"></div>
          <Link to="/" className="navbar-navlink">
            {props.text}
          </Link>
        </div>
        <div className="navbar-links">
          <a href="#clubs" className="navbar-link link">
            {props.Link_1}
          </a>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  Link_3: 'Prices',
  text1: 'Features',
  text12: 'Prices',
  Link_4: 'Testimonials',
  Branding_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/afed3d97-066a-440a-a27e-491fdc7ac2b5?org_if_sml=15413',
  Link_1: 'Clubs',
  text131: 'Log in',
  rootClassName: '',
  image_alt: 'image',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195',
  text1311: 'Sign up',
  text13: 'Contact',
  Link_2: 'FAQs',
  pastedImage_alt: 'pastedImage',
  image_src: '/pastedimage-cx4wqj.svg',
  Branding_alt: 'pastedImage',
  text: 'CAMPUS CLUB MANAGEMENT',
  Link: 'FAQs',
  text11: 'How it works',
}

Navbar.propTypes = {
  Link_3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  Link_4: PropTypes.string,
  Branding_src: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text: PropTypes.string,
  Link: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
