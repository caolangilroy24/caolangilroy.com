import React from 'react'
import '../styles/main/homeBanner.scss'
// import '../styles/main/HighlevelTest.scss'
import '../styles/main/common.scss'


export default function Banner() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
  return (
    <div class="banner">
            <div class="banner-container">
                <div class="photo"></div>
                <button className='contact-button hide-on-mobile' onClick={scrollToBottom}>
              Contact Me
            </button>
            </div>
        </div>
  )
}
