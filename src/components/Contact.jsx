import React from 'react'
import '../styles/main/contact.scss'
import github from '../assets/github-primary.svg'
import linkedin from '../assets/linkedin-primary.svg'
import '../styles/main/utils.scss'

export default function Contact() {
  return (
    <div className='contact-content'>
          <div className='contact-content-container'>
            <h1>Lets Work Together</h1>
            <h3>email@gmail.com</h3>
              <div className='github-linkedin-bar'>
                <a href='https://github.com/caolangilroy24' target="_blank" rel="noopener noreferrer">
                  < img src={github} className="contact-icon" alt="github-orange" />
                </a>
                <a href='https://www.linkedin.com/in/caolan-gilroy/' target="_blank" rel="noopener noreferrer">
                  < img src={linkedin} className="contact-icon" alt="linkedin-orange" />
                </a>
              
              </div>   
          </div>
    </div>
  )
}
