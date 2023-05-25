import React,{useState,useEffect} from 'react'
import './productList.css'
import { useParams } from 'react-router-dom';
import {Card} from './../../components'
import axios from 'axios';

const ProductList = ({catId, sort}) => {
  // const colors = ["white"]
  const category = parseInt(useParams().id)
  const [data,setData] = useState(null)

  useEffect(()=>{
      axios.get('https://ecommerce-project-f8fc5-default-rtdb.europe-west1.firebasedatabase.app/products.json').
      then(res => setData(res.data)).catch(err => console.log(err))
  },[])
  

  return (
    <div className='product-list'>
      {
        // items?.map((item)=>(<Card item={item} key={item.id}/>)).filter((all)=>!["black"].includes(all))
        // console.log(items?.filter((item)=>item.color.includes['black']))
        // items.filter(f=>colors.some(name => f.color.includes(name))).map(product => (
        //   <Card item={product} key={product.id}/>
        // ))
        data == null ? 
        <p>Loading</p>:
        data.filter((item) => (item.category == category)).map(product => (
          <Card item={product} key={product.id}/>
        ))
        
      }
    </div>
  )
}

export default ProductList