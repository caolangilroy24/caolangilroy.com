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
import Banner from './components/Banner'


function App() {

  return (
    <>
      <div className='body-container'>
        < img src={logo} className="logo" alt="logo" />
        
        <Home/>
        <Contact/>
        <Banner/>

      </div>
    </>
  )
}

export default App
