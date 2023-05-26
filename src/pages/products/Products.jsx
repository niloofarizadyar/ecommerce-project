import React,{ useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductList } from './../../components'
import SearchIcon from '@mui/icons-material/Search';
import './products.css'


const Products = () => {
  const [query, setQuery] = useState("")
  const catId = parseInt(useParams().id)
  
  
  return (
      <div className='products-content'>
        <div className='content-top'>
          <div className='content-open'>
            <div className='search-icon'><SearchIcon /></div>
            <input type='search' placeholder='Search...' className='search-input' onChange={(e)=>setQuery(e.target.value)} />
          </div>
          <div className='content-top-title'>Category List</div>
        </div>

        <div className='content-bottom'>
           <ProductList catId={catId} query={query} /> 
        </div>
      </div> 
  )
}

export default Products