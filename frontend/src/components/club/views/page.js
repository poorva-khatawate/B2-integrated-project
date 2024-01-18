import { default as React, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


import './page.css';

const Page = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    usn: '',
    email: '',
    number: '',
    club: 'Bits & Bytes Club',
    department: 'Computer Science'
  });

  const [errors, setErrors] = useState({});
  const [clubs, setClubs] = useState([]);
  const [message, setMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate USN
    const usnRegex = /^01fe\d{2}(bcs|bei|bec|bci|bee)\d{3}$/i;
  if (!formData.usn.trim() || !usnRegex.test(formData.usn.trim())) {
    newErrors.usn = 'Enter a valid USN';
  }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid E-Mail is required';
    }

    // Validate number
    const phoneNumberRegex = /^\d+$/;
  if (!formData.number.trim() || !phoneNumberRegex.test(formData.number.trim()) || formData.number.trim().length <= 9 || formData.number.trim().length >= 11) {
    newErrors.number = 'Vaild Number is Required';
  }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/fetch-data');
      if (response.ok) {
        const data = await response.json();
        console.log('Raw data from server:', data);
        setClubs(data.clubCounts || []); 
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error during data fetching:', error);
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form submitted successfully!');
          setMessage('Form submitted successfully!');
        } else {
          console.error('Error submitting form:', response.statusText);
          setMessage('Error submitting form. Please try again.');
        }
      } catch (error) {
        console.error('Error during form submission:', error);
        setMessage('Error during form submission. Please try again.');
      }
    }
  };
  

  const fetchClubsData = async () => {
    try {
      const response = await fetch('/fetch-data');
      const data = await response.json();
      setClubs(data);
    } catch (error) {
      console.error('Error fetching clubs data:', error);
    }
  };

  useEffect(() => {
    console.log('Component mounted or updated');
    fetchData();
  }, []);
  
  useEffect(() => {
    console.log('Clubs state updated:', clubs);
  }, [clubs]);

  

  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Campus Club Management</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Page - Campus Club Management" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <nav className="page-navbar">
        <div className="page-desktop">
          <div className="page-main">
            <div className="page-branding"></div>
            <Link to="/" className="page-navlink">
              CAMPUS CLUB MANAGEMENT
            </Link>
          </div>
        </div>
      </nav>
      <form method="POST" action='/submit' className="page-form" id="page-form" onSubmit={handleSubmit}>
        <span className="page-text02">Enter Details</span>
        <div className="page-container03">
          <label className="page-text03">Name:</label>
         <input
          type="text"
          name="klfw"
          required
          placeholder="Enter Your Full Name"
          autoComplete="name"
          className={`page-textinput input ${errors.name ? 'error' : ''}`}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="page-container04">
          <label className="page-text04">USN:   </label>
          <input
          type="text"
          name="klfw"
          required
          placeholder="Enter Your USN"
          autoComplete="usn"
          className={`page-textinput1 input ${errors.usn ? 'error' : ''}`}
          value={formData.usn}
          onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
        />
        {errors.usn && <p className="error-message0">{errors.usn}</p>}
        </div>
        <div className="page-container05">
          <label className="page-text05">Email:</label>
          <input
          type="text"
          name="klfw"
          required
          placeholder="Enter Your E-Mail"
          autoComplete="email"
          className={`page-textinput2 input ${errors.email ? 'error' : ''}`}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error-message1">{errors.email}</p>}
        </div>
        <div className="page-container06">
          <label className="page-text06">Number:</label>
          <input
          type="text"
          name="klfw"
          required
          placeholder="Enter Your Phone Number"
          autoComplete="number"
          className={`page-textinput3 input ${errors.number ? 'error' : ''}`}
          value={formData.number}
          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
        />
        {errors.number && <p className="error-message2">{errors.number}</p>}
        </div>
        <div data-thq="thq-dropdown" className="page-thq-dropdown list-item">
          <ul data-thq="thq-dropdown-list" className="page-dropdown-list">
            <li data-thq="thq-dropdown" className="page-dropdown list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="page-dropdown-toggle"
              >
                <span className="page-text07">Bits &amp; Bytes Club</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="page-dropdown1 list-item">
              <div
                data-thq="thq-dropdown-toggle"
                className="page-dropdown-toggle1"
              >
                <span className="page-text08">Developer Student Club</span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="page-dropdown2 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="page-dropdown3 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="page-dropdown4 list-item"
            ></li>
          </ul>
        </div>
        <div className="page-container07">
          <span className="page-text09">
            <span>Club:</span>
            <br></br>
          </span>
          <div className="page-container08">
          <select
            required
            className="page-select"
            value={formData.club}
            onChange={(e) => setFormData({ ...formData, club: e.target.value })}>
            <option value="Bits & Bytes Club">Bits & Bytes Club</option>
            <option value="Developer Student Club">Developer Student Club</option>
          </select>
          </div>
        </div>
        <div className="page-container09">
          <span className="page-text12">
            <span>Department:</span>
            <br></br>
          </span>
          <div className="page-container10">
          <select
            required
            className="page-select1"
            value={formData.department} // Set the value to formData.department
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}>
            <option value="Computer Science">Computer Science</option>
            <option value="E&C">E&C</option>
            <option value="E&E">E&E</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Architecture">Architecture</option>
          </select>
          </div>
        </div>
        <input type="submit" id="submit" name="submit" className="page-button button" onClick={handleSubmit}/>
        {message && <p className={message.includes('Error') ? 'error-message' : 'success-message'}>{message}</p>} 
      </form>
      
    </div>
  )
}

export default Page
