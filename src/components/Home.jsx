import React from 'react'
import '../styles/main/home.scss'
import location from '../assets/location.svg'
import githubSmall from '../assets/github-small.svg'
import linkedinSmall from '../assets/linkedin-small.svg'
import '../styles/main/common.scss'
import '../styles/main/homeBanner.scss'
import '../styles/main/home.scss'
import TechStack from './TechStack'



export default function Home() {
  return (
    <div className='home-content'>
          <div className='home-content-container'>
            <h1>Full Stack Software Engineer</h1>
            <div className='location-linkedin-bar'>
              < img src={location} className="subheading-icon" alt="location" />
              <div className='location-text'>Berlin</div>
              <a href='https://github.com/caolangilroy24' target="_blank" rel="noopener noreferrer">
                < img src={githubSmall} className="subheading-icon" alt="github-small" />
              </a>
              <a href='https://www.linkedin.com/in/caolan-gilroy/' target="_blank" rel="noopener noreferrer">
                < img src={linkedinSmall} className="subheading-icon" alt="linkedin-small" />
                </a>
            </div>
            <h3>Hi, I'm <span className='highlight-text'>Caolan Gilroy</span>, a software developer based in Berlin. Passionate about web development, I specialize in MEAN and MERN stack technologies and thrive on delivering innovative solutions. Let's create something amazing together!</h3>
            <TechStack/>
          </div>
    </div>
  )
}
