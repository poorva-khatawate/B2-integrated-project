import React from 'react'

import PropTypes from 'prop-types'

import Check from './check'
import './clubs.css'

const Clubs = (props) => {
  return (
    <div className="clubs-pricing">
      <div className="clubs-content">
        <div className="clubs-header">
          <div className="clubs-tag">
            <span className="clubs-text">{props.text2}</span>
          </div>
          <div className="clubs-heading">
            <h2 className="clubs-text01">{props.heading}</h2>
          </div>
        </div>
        <div className="clubs-pricing-plans">
          <div className="clubs-plans">
            <div className="clubs-plan">
              <div className="clubs-top">
                <div className="clubs-heading1">
                  <span className="clubs-text02">{props.text9}</span>
                  <span className="clubs-text03">{props.text10}</span>
                </div>
              </div>
              <div className="clubs-bottom">
                <div className="clubs-check-list">
                  <Check Feature="Sharpen your English skills"></Check>
                  <Check Feature="Explore different areas of English"></Check>
                  <Check Feature="Prepare for academic success"></Check>
                  <Check Feature="Build confidence"></Check>
                  <Check Feature="Gain fresh perspectives"></Check>
                </div>
                <div className="clubs-button">
                  <span className="clubs-text04">{props.Text9}</span>
                </div>
              </div>
            </div>
            <div className="clubs-plan1">
              <div className="clubs-top1">
                <div className="clubs-heading2">
                  <span className="clubs-text05">{props.text11}</span>
                  <span className="clubs-text06">{props.text12}</span>
                </div>
              </div>
              <div className="clubs-bottom1">
                <div className="clubs-check-list1">
                  <Check Feature="Developing critical thinking and research skills"></Check>
                  <Check Feature="Meeting like-minded individuals"></Check>
                  <Check Feature="Building self-confidence"></Check>
                  <Check Feature="Developing cyber security skills"></Check>
                  <Check Feature="Improving leadership skills"></Check>
                </div>
                <div className="clubs-button1">
                  <span className="clubs-text07">{props.Text12}</span>
                </div>
              </div>
            </div>
            <div className="clubs-plan2">
              <div className="clubs-top2">
                <div className="clubs-heading3">
                  <span className="clubs-text08">{props.text13}</span>
                  <span className="clubs-text09">{props.text14}</span>
                </div>
              </div>
              <div className="clubs-bottom2">
                <div className="clubs-check-list2">
                  <Check Feature="Structured Learning"></Check>
                  <Check Feature="Expert Guidance"></Check>
                  <Check Feature="Enhancing Communication and Soft Skills"></Check>
                  <Check Feature="Mock Tests and Feedback"></Check>
                  <Check Feature="Exposure to Current Affairs and Events"></Check>
                </div>
                <div className="clubs-button2">
                  <span className="clubs-text10">{props.Text15}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="clubs-expand">
            <div className="clubs-overlay">
              <div className="clubs-header1">
                <div className="clubs-heading4">
                  <span className="clubs-text11">{props.text15}</span>
                  <span className="clubs-text12">{props.text16}</span>
                </div>
                <div className="clubs-check-list3">
                  <div className="clubs-check">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text13">{props.text19}</span>
                  </div>
                  <div className="clubs-check1">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon02">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text14">{props.text20}</span>
                  </div>
                  <div className="clubs-check2">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon04">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text15">{props.text21}</span>
                  </div>
                </div>
              </div>
              <div className="clubs-button3">
                <span className="clubs-text16">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="clubs-plans1">
          <div className="clubs-plan3">
            <div className="clubs-top3">
              <div className="clubs-heading5">
                <span className="clubs-text19">{props.text3}</span>
                <span className="clubs-text20">{props.text4}</span>
              </div>
              <div className="clubs-cost">
                <span className="clubs-text21">{props.Text}</span>
              </div>
            </div>
            <div className="clubs-bottom3">
              <div className="clubs-check-list4">
                <Check></Check>
                <Check Feature="Quis nostrud exercitation ulla"></Check>
                <Check Feature="Duis aute irure dolor intuit"></Check>
                <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                <Check Feature="Corporis suscipit laboriosam"></Check>
              </div>
              <div className="clubs-button4">
                <span className="clubs-text22">{props.Text1}</span>
              </div>
            </div>
          </div>
          <div className="clubs-plan4">
            <div className="clubs-top4">
              <div className="clubs-heading6">
                <span className="clubs-text23">{props.text5}</span>
                <span className="clubs-text24">{props.text6}</span>
              </div>
              <div className="clubs-cost1">
                <span className="clubs-text25">{props.Text2}</span>
                <span className="clubs-text26">{props.Text3}</span>
              </div>
            </div>
            <div className="clubs-bottom4">
              <div className="clubs-check-list5">
                <Check></Check>
                <Check Feature="Quis nostrud exercitation ulla"></Check>
                <Check Feature="Duis aute irure dolor intuit"></Check>
                <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                <Check Feature="Corporis suscipit laboriosam"></Check>
              </div>
              <div className="clubs-button5">
                <span className="clubs-text27">{props.Text4}</span>
              </div>
            </div>
          </div>
          <div className="clubs-plan5">
            <div className="clubs-top5">
              <div className="clubs-heading7">
                <span className="clubs-text28">{props.text7}</span>
                <span className="clubs-text29">{props.text8}</span>
              </div>
              <div className="clubs-cost2">
                <span className="clubs-text30">{props.Text5}</span>
                <span className="clubs-text31">{props.Text6}</span>
              </div>
            </div>
            <div className="clubs-bottom5">
              <div className="clubs-check-list6">
                <Check></Check>
                <Check Feature="Quis nostrud exercitation ulla"></Check>
                <Check Feature="Duis aute irure dolor intuit"></Check>
                <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                <Check Feature="Corporis suscipit laboriosam"></Check>
              </div>
              <div className="clubs-button6">
                <span className="clubs-text32">{props.Text7}</span>
              </div>
            </div>
          </div>
          <div className="clubs-expand1">
            <div className="clubs-overlay1">
              <div className="clubs-header2">
                <div className="clubs-heading8">
                  <span className="clubs-text33">{props.text17}</span>
                  <span className="clubs-text34">{props.text18}</span>
                </div>
                <div className="clubs-check-list7">
                  <div className="clubs-check3">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon06">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text35">{props.text22}</span>
                  </div>
                  <div className="clubs-check4">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon08">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text36">{props.text23}</span>
                  </div>
                  <div className="clubs-check5">
                    <svg viewBox="0 0 1024 1024" className="clubs-icon10">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="clubs-text37">{props.text24}</span>
                  </div>
                </div>
              </div>
              <div className="clubs-button7">
                <span className="clubs-text38">
                  <span>Contact us</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clubs-help">
        <span className="clubs-text41">{props.text}</span>
        <div className="clubs-explore">
          <span className="clubs-text42">{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

Clubs.defaultProps = {
  Text9: 'Get Started',
  Text15: 'Get Started',
  text9: "Word's Worth English Club",
  Text2: '$8',
  Text4: 'Get Plus',
  Text5: '$16',
  Text6: '/month',
  text20: 'Clearly identify your interests and goals',
  text24: 'Duis aute irure dolor intuit',
  text11: 'Defence Club',
  Text11: '/month',
  text12: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  Text14: '/month',
  Text10: '$8',
  heading: 'No setup cost or hidden fees.',
  text19: 'Ask specific questions',
  Text12: 'Get Started',
  text4: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  Text7: 'Get Plus',
  Text13: '$16',
  text2: 'CLUBS',
  text5: 'Plus',
  text10: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  Text3: '/month',
  text6: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  Text: 'Free',
  text15: 'Expand',
  text22: 'Sed ut perspiciatis unde',
  text3: 'Standard',
  text7: 'Premium',
  text13: 'UPSC Club',
  Text8: 'Free',
  text23: 'Quis nostrud exercitation ulla',
  text14: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  text: 'Need any help?',
  text8: 'Sed ut perspiciatis unde omnis iste natus error sit.',
  text21: 'Ask for information about different club options',
  text1: 'Get in touch with us right away ->',
  text17: 'Expand',
  text16:
    'Not sure which club to join, contact us and get more info about the clubs.',
  text18:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Text1: 'Get Standard',
}

Clubs.propTypes = {
  Text9: PropTypes.string,
  Text15: PropTypes.string,
  text9: PropTypes.string,
  Text2: PropTypes.string,
  Text4: PropTypes.string,
  Text5: PropTypes.string,
  Text6: PropTypes.string,
  text20: PropTypes.string,
  text24: PropTypes.string,
  text11: PropTypes.string,
  Text11: PropTypes.string,
  text12: PropTypes.string,
  Text14: PropTypes.string,
  Text10: PropTypes.string,
  heading: PropTypes.string,
  text19: PropTypes.string,
  Text12: PropTypes.string,
  text4: PropTypes.string,
  Text7: PropTypes.string,
  Text13: PropTypes.string,
  text2: PropTypes.string,
  text5: PropTypes.string,
  text10: PropTypes.string,
  Text3: PropTypes.string,
  text6: PropTypes.string,
  Text: PropTypes.string,
  text15: PropTypes.string,
  text22: PropTypes.string,
  text3: PropTypes.string,
  text7: PropTypes.string,
  text13: PropTypes.string,
  Text8: PropTypes.string,
  text23: PropTypes.string,
  text14: PropTypes.string,
  text: PropTypes.string,
  text8: PropTypes.string,
  text21: PropTypes.string,
  text1: PropTypes.string,
  text17: PropTypes.string,
  text16: PropTypes.string,
  text18: PropTypes.string,
  Text1: PropTypes.string,
}

export default Clubs
