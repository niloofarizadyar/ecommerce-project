import React from 'react'
import { Header, FeaturedProducts, Category} from './../../components'
import axios from 'axios'

const Home = () => {
 
  return (
    <div>
      <Header />
      <FeaturedProducts />
      <Category />
    </div>
  )
}

export default Home