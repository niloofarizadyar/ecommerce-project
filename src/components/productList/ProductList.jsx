import React,{useState,useEffect} from 'react'
import './productList.css'
import { useParams } from 'react-router-dom';
import {Card} from './../../components'
import axios from 'axios';

const ProductList = ({catId, query}) => {
  const category = parseInt(useParams().id)
  const [data,setData] = useState(null)
  const keys = ["title", "description", "color"]

  useEffect(()=>{
      axios.get('https://ecommerce-project-f8fc5-default-rtdb.europe-west1.firebasedatabase.app/products.json').
      then(res => setData(res.data)).catch(err => console.log(err))
  },[])

  const search = (items) => {
    return items.filter((item) => (item.category == category && keys.some(key => item[key].toLowerCase().toString().includes(query))))
  }
  console.log(search(data).length)
  return (
    <div className='product-list'>
      {
        data == null ? 
        <p>Loading</p>:
        search(data).length > 0 ?
        (search(data).map(product => (
          <Card item={product} key={product.id}/>
        ))):(<p>no result</p>  )
      }
    </div>
  )
}

export default ProductList