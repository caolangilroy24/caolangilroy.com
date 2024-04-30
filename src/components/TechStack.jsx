import React from 'react'
import '../styles/main/techStack.scss'
import agileIcon from '../assets/agile.svg'
import angularIcon from '../assets/angular.svg'
import cssIcon from '../assets/css.svg'
import expressIcon from '../assets/express.svg'
import githubIcon from '../assets/github.svg'
import htmlIcon from '../assets/html.svg'
import javascriptIcon from '../assets/javascript.svg'
import mongodbIcon from '../assets/mongodb.svg'
import nodeIcon from '../assets/node.svg'
import reactIcon from '../assets/react.svg'
import sassIcon from '../assets/sass.svg'
import typescriptIcon from '../assets/typescript.svg'

export default function TechStack() {
  return (
    <div className='icon-container'>
        <img src={agileIcon} className='icon'/>
        <img src={angularIcon} className='icon'/>
        <img src={cssIcon} className='icon'/>
        <img src={expressIcon} className='icon'/>
        <img src={githubIcon} className='icon'/>
        <img src={htmlIcon} className='icon'/>
        <img src={javascriptIcon} className='icon'/>
        <img src={mongodbIcon} className='icon'/>
        <img src={nodeIcon} className='icon'/>
        <img src={reactIcon} className='icon'/>
        <img src={sassIcon} className='icon'/>
        <img src={typescriptIcon} className='icon'/>
    </div>
  )
}
