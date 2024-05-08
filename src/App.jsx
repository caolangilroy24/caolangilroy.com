import { useState } from 'react'
import logo from '../public/logo.svg'
import './styles/main/example.scss'
import './styles/main/homeBanner.scss'
import './styles/main/contentContainer.scss'
import Home from './components/Home'
import Contact from './components/Contact'
import Banner from './components/Banner'



function App() {
  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
  };

  return (
    <>
    <div class="box__wrapper">
      < img src={logo} className="logo" alt="logo" />

        <div class="content">
        <Home/>
        <Contact/>

        </div>
        <Banner/>
    </div>
    </>
  )
}

export default App
