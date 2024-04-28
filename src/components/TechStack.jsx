import React from 'react'
import '../styles/main/techStack.scss'
import agileIcon from '../assets/icons/agile.svg'
import angularIcon from '../assets/icons/angular.svg'
import cssIcon from '../assets/icons/css.svg'
import expressIcon from '../assets/icons/express.svg'
import githubIcon from '../assets/icons/github.svg'
import htmlIcon from '../assets/icons/html.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import mongodbIcon from '../assets/icons/mongodb.svg'
import nodeIcon from '../assets/icons/node.svg'
import reactIcon from '../assets/icons/react.svg'
import sassIcon from '../assets/icons/sass.svg'
import typescriptIcon from '../assets/icons/typescript.svg'

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
