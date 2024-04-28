import { useState } from 'react'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
import location from './assets/location.svg'
import githubSmall from './assets/github-small.svg'
import linkedinSmall from './assets/linkedin-small.svg'
import './styles/main/example.scss'
import './styles/main/homeBanner.scss'
import './styles/main/contentContainer.scss'
import TechStack from './components/TechStack'
import Home from './components/Home'
import Contact from './components/Contact'


function App() {

  return (
    <>
      <div className='body-container'>
        < img src={logo} className="logo" alt="logo" />
        
        <Home/>
        <Contact/>
        {/* <div className='contact-content'>

          <div className='contact-content-container'>
            <h1>Full Stack Software </h1>
            <div className='location-linkedin-bar'>< img src={location} className="small-icon" alt="location" /><div className='location-text'>Berlin</div>< img src={githubSmall} className="small-icon" alt="github-small" />< img src={linkedinSmall} className="small-icon" alt="linkedin-small" /></div>
            <h3>Hi, I'm <span className='highlight-text'>Caolan Gilroy</span>, a software developer based in Berlin. Passionate about web development, I specialize in MEAN and MERN stack technologies and thrive on delivering innovative solutions. Let's create something amazing together!</h3>
            <TechStack/>
          </div>
        </div> */}

        <div className='banner'>
          <div className='banner-container'>

            <div className='test-grid' >

            </div>
            <button className='contact-button'>
              Contact Me
            </button>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
