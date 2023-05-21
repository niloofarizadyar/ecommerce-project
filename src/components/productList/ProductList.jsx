import React from 'react'
import './productList.css'
import {items} from './productListItems'
import {Card} from './../../components'

const ProductList = ({catId, sort}) => {
  return (
    <div className='product-list'>
      {items?.map((item)=>(<Card item={item} key={item.id}/>))}
    </div>
  )
}

export default ProductList