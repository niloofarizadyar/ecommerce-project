import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
import {items} from './CartItems'

const Cart = () => {
  return (
    <div className='cart-container'>
        <h2 className='cart-title'>Cart Lists</h2>
        {
            items.map((item)=>(
                <div className='cart-item' key={item.id}>
                    <div className='cart-item-img-container'>
                        <img className='cart-item-img' src={item.img} />
                    </div>
                    <div className='cart-item-detail'>
                        <div className='cart-item-title'>{item.title}</div>
                        <div className='cart-item-description'>{item.description.substring(1,30)}...</div>
                        <div className='cart-item-price'>price : {item.price}</div>
                    </div>
                    <div className='cart-item-delete-icon'><DeleteIcon /></div>
                </div>
            ))
        }
        <hr />
        <p className='cart-total'>Total Price : 230$</p>
        <button className='cart-checkout'>CHECKOUT</button>
    </div>
  )
}

export default Cart