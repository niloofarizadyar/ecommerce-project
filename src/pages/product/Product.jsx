import React,{useState} from 'react'
import Storage from './../../assets/storage.jpg'
import './product.css'

const Product = () => {
  const [count, setCount] = useState(1)
  return (
    <div className='product'>
      <div className='product-img-container'>
        <img className='product-img' src={Storage} />
        
      </div>
      <div className='product-description'>
        <h2 className='single-product-info'>My Title</h2>
        <h3 className='single-product-info'>Price : 100$</h3>
        <p className='single-product-info'>this is a description.</p>
        <div className='product-add-count'>
          <button className='count-btn' onClick={()=>(setCount((prevState)=>prevState == 1 ? 1 : prevState -1))}>-</button>
          <p className='count-num'>{count}</p>
          <button className='count-btn' onClick={()=>(setCount((prevState)=>prevState + 1))}>+</button>
        </div>
        <button className='add-to-card-btn'>ADD TO CARD</button>
      </div>
    </div>
  )
}

export default Product