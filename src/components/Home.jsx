import React from 'react'
import '../styles/main/contentContainer.scss'
import location from '../assets/location.svg'
import githubSmall from '../assets/github-small.svg'
import linkedinSmall from '../assets/linkedin-small.svg'
import '../styles/main/example.scss'
import '../styles/main/homeBanner.scss'
import '../styles/main/contentContainer.scss'
import TechStack from './TechStack'


export default function Home() {
  return (
    <div className='home-content'>
          <div className='home-content-container'>
            <h1>Full Stack Software Engineer</h1>
            <div className='location-linkedin-bar'>< img src={location} className="small-icon" alt="location" /><div className='location-text'>Berlin</div>< img src={githubSmall} className="small-icon" alt="github-small" />< img src={linkedinSmall} className="small-icon" alt="linkedin-small" /></div>
            <h3>Hi, I'm <span className='highlight-text'>Caolan Gilroy</span>, a software developer based in Berlin. Passionate about web development, I specialize in MEAN and MERN stack technologies and thrive on delivering innovative solutions. Let's create something amazing together!</h3>
            <TechStack/>
          </div>
    </div>
  )
}
