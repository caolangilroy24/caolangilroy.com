import React from 'react'
import '../styles/main/homeBanner.scss'


export default function Banner() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };
  return (
    <div className='banner-new-new'>
        <div className='banner-container-new'>
            <div className='photo-new' >
            </div>
            <button className='contact-button' onClick={scrollToBottom}>
              Contact Me
            </button>
        </div>
    </div>
  )
}
