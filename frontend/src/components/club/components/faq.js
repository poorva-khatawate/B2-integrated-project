import React from 'react'

import PropTypes from 'prop-types'

import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-faq">
      <div className="faq">
        <div className="faq-header">
          <div className="faq-tag">
            <span className="faq-text">
              <span>FAQ</span>
              <br></br>
            </span>
          </div>
          <div className="faq-heading">
            <h2 className="faq-text03">{props.heading}</h2>
          </div>
        </div>
        <div className="faq-rows">
          <div className="faq-column">
            <div className="Question">
              <span className="faq-title">{props.Title}</span>
              <span className="faq-description">{props.Description}</span>
            </div>
            <div className="Question">
              <span className="faq-title1">{props.Title1}</span>
              <span className="faq-description1">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  tempor incididunt ut labore et dolore magna aliqua. Excepteur
                  sint occaecat
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="faq-question2 Question">
              <span className="faq-title2">{props.Title2}</span>
              <span className="faq-description2">{props.Description1}</span>
            </div>
          </div>
          <div className="faq-column1">
            <div className="faq-question3 Question">
              <span className="faq-title3">{props.Title3}</span>
              <span className="faq-description3">{props.Description2}</span>
            </div>
            <div className="faq-question4 Question">
              <span className="faq-title4">{props.Title4}</span>
              <span className="faq-description4">{props.Description3}</span>
            </div>
            <div className="faq-question5 Question">
              <span className="faq-title5">{props.Title5}</span>
              <span className="faq-description5">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  tempor incididunt ut labore et dolore magna aliqua. Excepteur
                  sint occaecat
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ.defaultProps = {
  Title2: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title4: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title3: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  Description2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  Title: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title5: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
  Title1: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  heading: 'Frequently Asked Questions',
  Description3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

FAQ.propTypes = {
  Title2: PropTypes.string,
  Title4: PropTypes.string,
  Title3: PropTypes.string,
  Description1: PropTypes.string,
  Description2: PropTypes.string,
  Title: PropTypes.string,
  Title5: PropTypes.string,
  Description: PropTypes.string,
  Title1: PropTypes.string,
  heading: PropTypes.string,
  Description3: PropTypes.string,
}

export default FAQ
