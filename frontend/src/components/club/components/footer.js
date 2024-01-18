import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <div className="footer-content">
        <div className="footer-information">
          <div className="footer-heading">
            <img
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="footer-pasted-image"
            />
            <span className="footer-text">{props.text1}</span>
          </div>
          <div className="footer-socials">
            <Social rootClassName="social-root-class-name"></Social>
            <Social
              Insider_src="/pastedimage-k0l6.svg"
              rootClassName="social-root-class-name1"
            ></Social>
            <Social
              Insider_src="/pastedimage-ld65.svg"
              rootClassName="social-root-class-name2"
            ></Social>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <span className="footer-header">{props.Header}</span>
            <span className="footer-link">{props.Link}</span>
            <span className="footer-link01">{props.Link1}</span>
            <span className="footer-link02">{props.Link2}</span>
            <span className="footer-link03">{props.Link3}</span>
            <span className="footer-link04">{props.Link4}</span>
          </div>
          <div className="footer-column1">
            <span className="footer-header1">{props.Header1}</span>
            <span className="footer-link05">{props.Link5}</span>
            <span className="footer-link06">{props.Link6}</span>
            <span className="footer-link07">{props.Link7}</span>
            <span className="footer-link08">{props.Link8}</span>
            <span className="footer-link09">{props.Link9}</span>
            <span className="footer-link10">{props.Link10}</span>
          </div>
        </div>
      </div>
      <span className="footer-text1">{props.text}</span>
    </div>
  )
}

Footer.defaultProps = {
  Link9: 'Careers',
  Link1: 'Responsive Prototypes',
  Link: 'Responsive Web Design',
  Link8: 'Partners',
  Link3: 'Static Website Builder',
  Link10: 'Press & Media',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Header1: 'Company',
  pastedImage_src: '/pastedimage-qqc.svg',
  pastedImage_alt: 'pastedImage',
  Link7: 'News',
  Link2: 'Design to Code',
  Link5: 'About',
  text: '© 2022 finbest. All Rights Reserved.',
  Header: 'Solutions',
  Link6: 'Team',
  Link4: 'Static Website Generator',
}

Footer.propTypes = {
  Link9: PropTypes.string,
  Link1: PropTypes.string,
  Link: PropTypes.string,
  Link8: PropTypes.string,
  Link3: PropTypes.string,
  Link10: PropTypes.string,
  text1: PropTypes.string,
  Header1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Link7: PropTypes.string,
  Link2: PropTypes.string,
  Link5: PropTypes.string,
  text: PropTypes.string,
  Header: PropTypes.string,
  Link6: PropTypes.string,
  Link4: PropTypes.string,
}

export default Footer
