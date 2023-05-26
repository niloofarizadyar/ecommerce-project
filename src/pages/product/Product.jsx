import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './product.css'
import { addToCart } from '../../redux/CartReducer';

const Product = () => {
  const [count, setCount] = useState(1)
  const product_id = parseInt(useParams().id)
  const [data,setData] = useState(null)

  const dispatch = useDispatch()

  useEffect(()=>{
      axios.get('https://ecommerce-project-f8fc5-default-rtdb.europe-west1.firebasedatabase.app/products.json').
      then(res => setData(res.data[product_id])).catch(err => console.log(err))
  },[])
  

  if(data == null){return <p>Loading</p>}
  return (
    <div className='product'>
      <div className='product-img-container'>
        <img className='product-img' src={data.img} />
        
      </div>
      <div className='product-description'>
        <h2 className='single-product-info'>{data.title}</h2>
        <h3 className='single-product-info'>Price : {data.price}</h3>
        <p className='single-product-info'>{data.description}</p>
        <div className='product-add-count'>
          <button className='count-btn' onClick={()=>(setCount((prevState)=>prevState == 1 ? 1 : prevState -1))}>-</button>
          <p className='count-num'>{count}</p>
          <button className='count-btn' onClick={()=>(setCount((prevState)=>prevState + 1))}>+</button>
        </div>
        <button className='add-to-card-btn' onClick={()=>dispatch(addToCart({
          id:data.id,
          title: data.title,
          description:data.description,
          img:data.img,
          price:data.price,
          count
        }))}>ADD TO CARD</button>
      </div>
    </div>
  )
}

export default Product