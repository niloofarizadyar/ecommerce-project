import React from 'react'
import { Header, FeaturedProducts, Category} from './../../components'
import axios from 'axios'

const Home = () => {
  // axios.get('https://todo-list-react-4d69a-default-rtdb.firebaseio.com/products/1.json').then(res=>console.log(res.data.title))
  

  return (
    <div>
      <Header />
      <FeaturedProducts />
      <Category />
    </div>
  )
}

export default Home