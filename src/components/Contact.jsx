import React from 'react'
import '../styles/main/contact.scss'
import github from '../assets/icons/github-primary.svg'
import linkedin from '../assets/icons/linkedin-primary.svg'

export default function Contact() {
  return (
    <div className='content-content'>
          <div className='contact-content-container'>
            <h1>Lets Work Together</h1>
            <h3>caolangilroy@gmail.com</h3>
            <div className='github-linkedin-bar'>< img src={github} className="small-icon" alt="github-small" />< img src={linkedin} className="small-icon" alt="linkedin-small" /></div>   
          </div>
    </div>
  )
}
