import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import Quote from './quote'
import './testimonials.css'

const Testimonials = (props) => {
  return (
    <div className="testimonials-testimonials">
      <div className="testimonials-logo-container">
        <img
          alt={props.Logo_alt}
          src={props.Logo_src}
          className="testimonials-logo"
        />
      </div>
      <div className="testimonials-content">
        <div id="quotes" className="testimonials-quotes">
          <div className="quote active-quote">
            <Quote
              Title="Manager @KLE Tech"
              Author="John Doe"
              Avatar="/vector6113-r6dl.svg"
              rootClassName="quote-root-class-name"
            ></Quote>
          </div>
          <div className="quote">
            <Quote
              Quote='"Testing these templates is a pleasure."'
              Title="Developer @ Vista La Vista"
              Author="Author 2"
              rootClassName="quote-root-class-name"
            ></Quote>
          </div>
          <div className="quote">
            <Quote
              Quote='"Wow, awesome works!'
              Title="Designer @ OhBoy"
              rootClassName="quote-root-class-name"
            ></Quote>
          </div>
        </div>
        <div className="testimonials-buttons">
          <div id="quote-before" className="testimonials-left">
            <svg viewBox="0 0 1024 1024" className="testimonials-icon">
              <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
            </svg>
          </div>
          <div id="quote-next" className="testimonials-right">
            <svg viewBox="0 0 1024 1024" className="testimonials-icon2">
              <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
            </svg>
          </div>
        </div>
        <div>
          <div className="testimonials-container1">
            <Script
              html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonials.defaultProps = {
  Logo_src: '/pastedimage-idcu.svg',
  Logo_alt: 'pastedImage',
}

Testimonials.propTypes = {
  Logo_src: PropTypes.string,
  Logo_alt: PropTypes.string,
}

export default Testimonials
