import React, {useEffect} from 'react'
import pictureHeader from './../../assets/slide4.jpg'
import './header.css'

const Header = () => {

  return (
    <div className='header'>
        <img className="img-slide" src={pictureHeader}/>
        <div className='header-blur'>
            <h1>Home Design</h1>
            <p>Buy your favorite products, and design your home.</p>
        </div>
    </div>
  )
}

export default Header