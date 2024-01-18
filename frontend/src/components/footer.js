import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>About Us</h4>
          <p>KLE Technological University (KLE Tech) has its roots in one of the premier Engineering Institutions of Karnataka,
             B. V. Bhoomaraddi College of Engineering and Technology (BVB), a prestigious Engineering College in Hubballi.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programming">Programming</a></li>
            <li><a href="/clubs">Clubs</a></li>
            <li><a href="/association">Association</a></li>
            <li><a href="/literature">Literature</a></li>
          </ul>
        </div>
        <div className="section grey-background">
          <h2>About KLE Tech</h2>
          <ul >
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/kle-society">KLE Society</Link></li>
            <li><Link to="/chancellor-message">Chancellor’s Message</Link></li>
            <li><Link to="/vice-chancellor-message">Vice Chancellor’s Message</Link></li>
            <li><Link to="/board-of-governors">Board of Governors</Link></li>
            <li><Link to="/recognitions-approvals">Recognitions & Approvals</Link></li>
            <li><Link to="/mandatory-disclosures">Mandatory Disclosures</Link></li>
          </ul>
        </div>

        <div className="section grey-background">
          <h2>Campus-life</h2>
          <ul>
            <li><Link to="/academic-facilities">Academic Facilities</Link></li>
            <li><Link to="/on-campus-facilities">On Campus Facilities</Link></li>
            <li><Link to="/sports-health">Sports and Health</Link></li>
            <li><Link to="/social-life">Social Life</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: mail@kletec.ac.in</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
      <p>© Copyright 2024 - KLE Technological University. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;