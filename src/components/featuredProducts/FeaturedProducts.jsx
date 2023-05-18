import React from 'react'
import { items } from './FeaturedProductsItems'
import { Card } from './../../components'
import './featuredProducts.css'

const FeaturedProducts = () => {
  return (
    <div className='featured-products'>
        <div className='featured-products-top'>
            <div className='top-title'>
                <h2>
                    Featured Products
                </h2>
            </div>
            <div className='top-text'>
                <p>
                Featured products are typically best-selling, well-reviewed, or brand new products that are shown on the homepage of an eCommerce site. Adding a featured products section to your homepage is a practical way to draw attention to items that you know or hope will sell.
                </p>
            </div>
        </div>
        <div className='featured-products-bottom'>
            {
                items.map((item)=>(<Card key={item.id} item={item}/>))
            }
            
        </div>
    </div>
  )
}

export default FeaturedProducts