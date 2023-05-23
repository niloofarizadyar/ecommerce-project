import React,{useState, useEffect} from 'react'
import { Card } from './../../components'
import axios from 'axios'
import './featuredProducts.css'


const FeaturedProducts = () => {
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios.get('https://ecommerce-project-f8fc5-default-rtdb.europe-west1.firebasedatabase.app/products.json').
        then(res => setData(res.data)).catch(err => console.log(err))
    },[])
    
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
                data == null ? <p>Loading</p>:data.slice(0,4).map((item)=>(<Card key={item.id} item={item}/>))
            }
            
        </div>
    </div>
  )
}

export default FeaturedProducts