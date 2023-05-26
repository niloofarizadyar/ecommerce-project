import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import ChairRoundedIcon from '@mui/icons-material/ChairRounded';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Cart} from './../../components'
import { Link } from "react-router-dom";
import './navbar.css'

const Menu =()=>{
  return(
  <div className='menu-container-category'>
    <div className='menu-item-category'><Link to='/products/0'>Surface</Link></div>
    <div className='menu-item-category'><Link to='/products/1'>Comfort</Link></div>
    <div className='menu-item-category'><Link to='/products/2'>Lighting</Link></div>
    <div className='menu-item-category'><Link to='/products/3'>Storage</Link></div>
  </div>
  )
  
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCart, setToggleCart] = useState(false)
  const products = useSelector((state) => state.cart.products)

  return (
    <div className="navbar">
      <div className='navbar-container'>
        <div className='navbar-left-container'>
          <div className='navbar-logo'>
          <ChairRoundedIcon />
          </div>
          <div className='navbar-item'>
            <Link to='/'>Home Design</Link>
          </div>
          <div className='navbar-item-active' onClick={()=>setToggleMenu(!toggleMenu)}>
            <div className='navbar-item-category'>Category</div>
            { toggleMenu && <div className='navbar-menu'>
                <Menu />
              </div>
            }
            
          </div>
        </div>
        <div className='navbar-right-container'>
          <div className='navbar-cart-active' onClick={()=>setToggleCart(!toggleCart)}>
            <ShoppingCartOutlinedIcon />
            <span>{products.length}</span>
            { toggleCart && <div className='navbar-cart'>
                <Cart />
              </div>
            }
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Navbar