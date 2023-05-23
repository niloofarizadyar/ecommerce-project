import React from 'react'
import './productList.css'
import {items} from './productListItems'
import {Card} from './../../components'

const ProductList = ({catId, sort}) => {
  const colors = ["white"]
  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  return (
    <div className='product-list'>
      {
        // items?.map((item)=>(<Card item={item} key={item.id}/>)).filter((all)=>!["black"].includes(all))
        // console.log(items?.filter((item)=>item.color.includes['black']))
        items.filter(f=>colors.some(name => f.color.includes(name))).map(filteredName => (
          <Card item={filteredName} key={filteredName.id}/>
        ))
        
      }
    </div>
  )
}

export default ProductList