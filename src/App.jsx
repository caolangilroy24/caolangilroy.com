import { useState } from 'react'
import logo from '../public/logo.svg'
import './styles/main/example.scss'
import './styles/main/homeBanner.scss'
import './styles/main/contentContainer.scss'
import Home from './components/Home'
import Contact from './components/Contact'
import Banner from './components/Banner'
import HighLevelTest from './components/HighLevelTest'



function App() {
  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  };

  return (
    <>
    {/* <HighLevelTest>< img src={logo} className="logo" alt="logo"></img></HighLevelTest>
     */}  
    <div class="box__wrapper">
      < img src={logo} className="logo" alt="logo" />

        <div class="content">
        <Home/>

        </div>
        <div class="banner">
            <div class="banner-container">
                <div class="photo"></div>
                <button className='contact-button' onClick={scrollToBottom}>
              Contact Me
            </button>
            </div>
        </div>
    </div>
      {/* <div className='body-container'>
        < img src={logo} className="logo" alt="logo" />
        <Banner/>
        {/* <Contact/> */}
        {/* <Banner/> */}

      {/* </div> */} 
    </>
  )
}

export default App
