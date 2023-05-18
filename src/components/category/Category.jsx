import React from 'react'
import Comfort from './../../assets/comfort.jpg'
import Storage from './../../assets/storage.jpg'
import Lighting from './../../assets/lighting.jpg'
import Surface from './../../assets/surface.jpg'
import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category'>
        <div className='category-row'>
            <div className='category-col'>
                <img className='category-image' src={Comfort} />
                <Link className='image-cover-text' to='/products/2'>Comfort</Link>
            </div>
            <div className='category-col'>
                <img className='category-image' src={Storage} />
                <Link className='image-cover-text' to='/products/4'>Storage</Link>
            </div>
        </div>
        <div className='category-row'>
            <div className='category-col'>
                <img className='category-image' src={Lighting} />
                <Link className='image-cover-text' to='/products/3'>Lighting</Link>
            </div>
            <div className='category-col'>
                <img className='category-image' src={Surface} />
                <Link className='image-cover-text' to='/products/1'>Surface</Link>                
            </div>
        </div>
        
    </div>
  )
}

export default Category