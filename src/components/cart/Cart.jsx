import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import './cart.css'
import { removeItem } from '../../redux/CartReducer';


const Cart = () => {
    const products = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()
    
    const totalPrice = () =>{
        let total = 0
        products.forEach((item)=>(total += item.count * item.price))
        return total
    }
  return (
    <div className='cart-container'>
        <h2 className='cart-title'>Cart Lists</h2>
        {
            products.map((item)=>(
                <div className='cart-item' key={item.id}>
                    <div className='cart-item-img-container'>
                        <img className='cart-item-img' src={item.img} />
                    </div>
                    <div className='cart-item-detail'>
                        <div className='cart-item-title'>{item.title}</div>
                        <div className='cart-item-description'>{item.description.substring(0,30)}...</div>
                        <div className='cart-item-price'>price : {item.count} * {item.price}$</div>
                    </div>
                    <div className='cart-item-delete-icon' onClick={()=>dispatch(removeItem(item.id))}><DeleteIcon /></div>
                </div>
            ))
        }
        <hr />
        <p className='cart-total'>Total Price : {totalPrice()}$</p>
        <button className='cart-checkout'>CHECKOUT</button>
    </div>
  )
}

export default Cart