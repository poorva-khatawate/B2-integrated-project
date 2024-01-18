import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div id="faq" className="faq1-faq">
      <div className="faq">
        <div className="faq1-header">
          <div className="faq1-tag">
            <span className="faq1-text">
              <span>FAQ</span>
              <br></br>
            </span>
          </div>
          <div className="faq1-heading">
            <h2 className="faq1-text03">{props.heading}</h2>
          </div>
        </div>
        <div className="faq1-rows">
          <div className="faq1-column">
            <div className="Question">
              <span className="faq1-title">{props.Title}</span>
              <span className="faq1-description">{props.Description}</span>
            </div>
            <div className="Question">
              <span className="faq1-title1">{props.Title1}</span>
              <span className="faq1-description1">
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
            <div className="faq1-question2 Question">
              <span className="faq1-title2">{props.Title2}</span>
              <span className="faq1-description2">{props.Description1}</span>
            </div>
          </div>
          <div className="faq1-column1">
            <div className="faq1-question3 Question">
              <span className="faq1-title3">{props.Title3}</span>
              <span className="faq1-description3">{props.Description2}</span>
            </div>
            <div className="faq1-question4 Question">
              <span className="faq1-title4">{props.Title4}</span>
              <span className="faq1-description4">{props.Description3}</span>
            </div>
            <div className="faq1-question5 Question">
              <span className="faq1-title5">{props.Title5}</span>
              <span className="faq1-description5">
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

FAQ1.defaultProps = {
  Title4: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title3: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Description1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  Title2: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title5: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Title1: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Description2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  Title: 'What is sit amet, consectetur adipiscing elit, sed do? ',
  Description3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  heading: 'Frequently Asked Questions',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
}

FAQ1.propTypes = {
  Title4: PropTypes.string,
  Title3: PropTypes.string,
  Description1: PropTypes.string,
  Title2: PropTypes.string,
  Title5: PropTypes.string,
  Title1: PropTypes.string,
  Description2: PropTypes.string,
  Title: PropTypes.string,
  Description3: PropTypes.string,
  heading: PropTypes.string,
  Description: PropTypes.string,
}

export default FAQ1
