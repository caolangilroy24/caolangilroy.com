import { useState } from 'react'
import logo from '../public/logo.svg'
// import './styles/main/example.scss'
// import './styles/main/homeBanner.scss'
// import './styles/main/contentContainer.scss'
import Home from './components/Home'
import Contact from './components/Contact'
import Banner from './components/Banner'
import HighLevelTest from './components/HighLevelTest'


function App() {

  return (
    <>
    <HighLevelTest/>

      {/* <div className='body-container'>
        < img src={logo} className="logo" alt="logo" />
        <Banner/>
        <Home/>
        {/* <Contact/> */}
        {/* <Banner/> */}

      {/* </div> */} 
    </>
  )
}

export default App
