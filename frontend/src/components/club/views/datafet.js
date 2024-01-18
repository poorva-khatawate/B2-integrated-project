// datafetch.js

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './data-fetch.css'; // Import your CSS file

const DataFetch = (props) => {
  const [clubCounts, setClubCounts] = useState({});
  const [members, setMembers] = useState([]);
  

  const countMembers = (clubs, clubName) => {
    return clubs.filter((club) => club.club === clubName).length;
  };

  const clubs = [
    {
      id: 1,
      club: 'Bits & Bytes Club',
      description: 'Your tech community hub for coding competitions, hackathons, and language workshops. Gain personalized guidance for career placements and delve into the dynamic world of technology with us.',
      featuress: [
        'Get Opportunities to Participate in Hackathons',
        'Gain guidance for career placements',
        'Prepare for academic success',
        'Build confidence',
        'Gain fresh perspectives'
      ],
      events: ['coding competition, ','coding competition, ','DSA Coding Competition'],
    },
    {
      id: 2,
      club: 'Developer Student Club',
      description: 'Vibrant community of aspiring developers, united by a passion for cutting-edge tech. Collaborative and empowering, fostering exploration, learning, and innovation.',
      featuress: [
        'Developing critical thinking and research skills',
        'Meeting like-minded individuals',
        'Building self-confidence',
        'Developing Technological skills',
        'Improving leadership skills'
      ],
      events: ['Python Coding Competition, ','Coding Competition on Hackerrank, ','Coding Competition on Hackerrank'],
    },
  ];

  useEffect(() => {
    // Fetch member counts from the server
    const fetchMemberCounts = async () => {
      try {
        const response = await fetch('http://localhost:3001/fetch-member-counts');
        if (response.ok) {
          const countsData = await response.json();

          // Update state with member counts
          setClubCounts(countsData);
        } else {
          console.error('Error fetching member counts:', response.statusText);
        }
      } catch (error) {
        console.error('Error during member counts fetching:', error);
      }
    };

    // Call the fetchMemberCounts function
    fetchMemberCounts();
  }, []);


    
  useEffect(() => {
    // Calculate counts for each club based on member data
    const counts = members.reduce((acc, member) => {
      acc[member.club] = (acc[member.club] || 0) + 1;
      return acc;
    }, {});

    // Update state with counts
    setClubCounts(counts);
  }, [members]);

  return (
    <div className="page-container">
      <Helmet>
        <title>Data Fetch - Campus Club Management</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Data Fetch - Campus Club Management" />
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

      <div className="data-table-container">
      <h2>Data Table</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Club Name</th>
            <th>Club Members</th>
            <th>Events by the Club</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((club, index) => (
            <tr key={index}>
              <td>{club.id}</td>
              <td>{club.club}</td>
              <td><b><span>{`Total Members: ${clubCounts[club.club] || 0}`}</span></b></td>
              <td>{club.events}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
      };
export default DataFetch;
