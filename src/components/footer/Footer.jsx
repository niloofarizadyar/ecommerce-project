import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from './../../assets/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-links'>
          <h2>
            Follow Us
          </h2>
          <div className='footer-links-list'>
            <InstagramIcon />
            Instagram.com
          </div>
          <div className='footer-links-list'>
            <PinterestIcon />
            Pinterest.com
          </div>
          <div className='footer-links-list'>
            <FacebookIcon />
            Facebook.com
          </div>
        </div>
        <div className='footer-top-logo'>
          <img src={Logo} />
        </div>
        <div className='footer-top-about'>
          <h2>
            About us
          </h2>
          <p>Note that the values row and row-reverse are affected by the directionality of the flex container. If its dir attribute is ltr, row represents the horizontal axis oriented from the left to the right, and row-reverse from the right to the left; if the dir attribute is rtl, row represents the axis oriented from the right to the left, and row-reverse from the left to the right.</p>
        </div>
      </div>
      <div className='footer-bottom'>
          <div className='footer-bottom-container'>
            Copyright 2023. All Rights Reserved
          </div>
      </div>
    </div>
  )
}

export default Footer