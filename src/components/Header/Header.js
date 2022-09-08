import React from 'react'
import { CTA } from './CTA'
import ME from '../../assets/dp2.png'
import { HeaderSocial } from './HeaderSocial'
import './header.css'
import { TypedReact } from './TypedReact'

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello <span className='emoji'>👋 </span>I am</h5>
        <TypedReact />
        {/* <h5 className='text-light'>Frontend Developer</h5> */}
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt='me'></img>
          <a href='#contact' className='scroll__down' >Scroll Down</a>
        </div>
      </div>
    </header>
  )
}
