import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
  return (
    <div className='card'>
      <Link to={`/product/${item.id}`}>
        <img className='image-box' src={item.img} />
        <div className='card-container'>
          <h3>{item.title}</h3>
          <p>{item.description.substring(0,50)}</p>
          <p>Price : {item.price}</p></div>
      </Link>
    </div>
  )
}

export default Card