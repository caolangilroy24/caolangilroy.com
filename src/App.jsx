import { useState } from 'react'
import logo from '../public/logo.svg'
import './styles/main/example.scss'
import './styles/main/homeBanner.scss'
import './styles/main/contentContainer.scss'
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
