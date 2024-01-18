import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Check from '../components/check';
import Navbar from '../components/navbar';
import './home.css';




const Home = (props) => {
  const [clubCounts, setClubCounts] = useState({});
  const [members, setMembers] = useState([]);
  

  const countMembers = (clubs, clubName) => {
    return clubs.filter((club) => club.club === clubName).length;
  };

  const clubs = [
    {
      club: 'Bits & Bytes Club',
      description: 'Your tech community hub for coding competitions, hackathons, and language workshops. Gain personalized guidance for career placements and delve into the dynamic world of technology with us.',
      featuress: [
        'Get Opportunities to Participate in Hackathons',
        'Gain guidance for career placements',
        'Prepare for academic success',
        'Build confidence',
        'Gain fresh perspectives',
        // Add more features as needed
      ],
    },
    {
      club: 'Developer Student Club',
      description: 'Vibrant community of aspiring developers, united by a passion for cutting-edge tech. Collaborative and empowering, fostering exploration, learning, and innovation.',
      featuress: [
        'Developing critical thinking and research skills',
        'Meeting like-minded individuals',
        'Building self-confidence',
        'Developing Technological skills',
        'Improving leadership skills',
        // Add more features as needed
      ],
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
    <div className="home-container">
      <Helmet>
        <title>Campus Club Management</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Campus Club Management" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <Navbar rootClassName="navbar-root-class-name"></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-images">
            <img
              alt="pastedImage"
              src="/drama%20club-600h.png"
              className="home-pasted-image"
            />
            <img
              alt="pastedImage"
              src="/coding%20club-300h.png"
              className="home-pasted-image1"
            />
            <div className="home-column"></div>
            <div className="home-column1"></div>
            <div className="home-column2"></div>
          </div>
          <div className="home-content">
            <h1 className="home-title">
              <span className="home-text">CAMPUS CLUB</span>
              <br></br>
              <span>MANAGEMENT</span>
              <br></br>
            </h1>
            <span className="home-caption">
              Find your Club, find your Voice. The club revolution begins now.
            </span>
            <div className="home-hero-buttons"></div>
          </div>
          <img
            alt="pastedImage"
            src="/english%20club-600h.jpg"
            className="home-pasted-image2"
          />
        </div>
      </div>
      <div className="home-video">
        <div className="home-content1">
          <div className="home-header1">
            <h2 className="home-text04">
              Built by students, for students. Discover your club haven
            </h2>
          </div>
          <div className="home-video-container">
            <video
              src="/768d7263-eee5-4339-b176-654504a9ee6a%20(1)%20(1)%20(1).mp4"
              loop
              muted
              poster="/poster-900w.jpg"
              preload="auto"
              autoPlay
              controls
              playsInline
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading01">
                <span className="home-text05">Connect &amp; Thrive</span>
                <span className="home-text06">
                  Beyond textbooks, beyond grades, we argue for what we believe.
                  Find your voice, join the club 
                </span>
              </div>
              <div className="home-explore">
                <span className="home-text07">Explore Campus Clubs -&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-container1">
            <span className="home-text08">
              WHAT ARE YOU WAITING FOR? JOIN A CLUB NOW!
            </span>
          </div>
          <div className="home-book-btn">
            <span className="home-text09">Explore Clubs</span>
          </div>
        </div>
      </div>
      <div id="clubs" className="home-pricing">
        <div className="home-content2">
          <div className="home-content3">
            <div className="home-header3">
              <div className="home-tag">
                <span className="home-text32">CLUBS</span>
              </div>
              <div className="home-heading06"></div>
            </div>
            <div className="home-pricing-plans">
            <div className="home-plans1">
            {clubs.map((club, index) => (
                  <div className="home-plan3" key={index}>
                    <div className="home-top3">
                      <div className="home-heading07">
                        <span className="home-text33">{club.club}</span>
                        <span className="home-text34">{club.description}</span>
                        
                      <b><span>{`Total Members: ${clubCounts[club.club] || 0}`}</span></b>
                      </div>
                    </div>
                  <div className="home-bottom3">
                    <div className="home-check-list04">
                      
                    {club.featuress.map((feature, featureIndex) => (
                          <Check key={featureIndex} Feature={feature} />
                        ))}
                    </div>
                    <Link to="/page" className="home-navlink">
                      <div className="home-button05">
                        <span className="home-text35">Get Started</span>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
                
                
              </div>
              <div className="home-expand1">
                <div className="home-overlay1">
                  <div className="home-header4">
                    <div className="home-heading09">
                      <span className="home-text40">
                        Not sure which club to join, get more
                        info about the clubs.
                      </span>
                    </div>
                    <div className="home-check-list06">
                      <div className="home-check3">
                        <svg viewBox="0 0 1024 1024" className="home-icon06">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text41">
                          Get Answers to questions regarding events.
                        </span>
                      </div>
                      <div className="home-check4">
                        <svg viewBox="0 0 1024 1024" className="home-icon08">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text42">
                          Clearly identify your interests and goals.
                        </span>
                      </div>
                      <div className="home-check5">
                        <svg viewBox="0 0 1024 1024" className="home-icon10">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text43">
                          Get more information about different events.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link to="/datafet" className="home-navlink1">
                  <div className="home-button06">
                        <span className="home-text44">Event Details</span>
                  
                        </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
      
    </div>
      </div>
    </div>
  );
};

export default Home;
