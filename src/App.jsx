import { useState } from 'react'
import logo from '../public/logo.svg'
import './styles/main/common.scss'
import './styles/main/homeBanner.scss'
import './styles/main/home.scss'
import Home from './components/Home'
import Contact from './components/Contact'
import Banner from './components/Banner'



function App() {

  return (
    <>
<<<<<<< HEAD
    <div class="website-container">
      < img src={logo} className="logo" alt="logo" />

        <div class="content">
        <Home/>
        <Contact/>
=======
      <div className='body-container'>
        < img src={logo} className="logo" alt="logo" />
        
        <Home/>
        <Contact/>
        <Banner/>
>>>>>>> main

        </div>
        <Banner/>
    </div>
    </>
  )
}

export default App
