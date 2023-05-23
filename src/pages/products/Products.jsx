import React,{ useState } from 'react'
import { useParams } from 'react-router-dom';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ProductList } from './../../components'
import './products.css'


const Products = () => {
  // const [toggleMenu, setToggleMenu] = useState(false)
  const catId = parseInt(useParams().id)
  
  const [sort, setSort] = useState(null)
  return (
      <div className='products-content'>
        <div className='content-top'>
          <div className='content-open'>
            {/* <div className='open-btn' onClick={()=>setToggleMenu(!toggleMenu)}><FormatListBulletedIcon /></div> */}
            
            <div>Open filters</div>
          </div>
          <div className='content-top-title'>Category List</div>
        </div>

        {/* { toggleMenu && 
          <div className='products-filter-menu'>    
          <div className='menu-filter'>
            <p className='filter-title'>Color Filter</p>
            <div className='filter-item'>
              <input type='checkbox' id='1' value={1} />
              <label htmlFor='1'>Black</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='2' value={2} />
              <label htmlFor='2'>White</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='3' value={3} />
              <label htmlFor='3'>Gray</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='4' value={4} />
              <label htmlFor='4'>Marron</label>
            </div>
          </div>
          
          <div className='menu-filter'>
            <p className='filter-title'>Category Filter</p>
            <div className='filter-item'>
              <input type='checkbox' id='5' value={5} />
              <label htmlFor='5'>cat1</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='6' value={6} />
              <label htmlFor='6'>cat2</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='7' value={7} />
              <label htmlFor='7'>cat3</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='8' value={8} />
              <label htmlFor='8'>cat4</label>
            </div>
            <div className='filter-item'>
              <input type='checkbox' id='9' value={9} />
              <label htmlFor='9'>cat5</label>
            </div>
          </div>
          
          <div className='menu-filter'>
          <p className='filter-title'>Price Sort</p>
          <div className='filter-item'>
            <input type='radio' id='low' value='low' name='sorting' onClick={(e)=>setSort("low")} />
            <label htmlFor='low'>Low to High</label>
          </div>
          <div className='filter-item'>
            <input type='radio' id='high' value='high' name='sorting' onClick={(e)=>setSort("high")}/>
            <label htmlFor='high'>High to Low</label>
          </div>
          </div>
        </div>
        } */}

        <div className='content-bottom'>
          
           <ProductList catId={catId} sort={sort} /> 
        </div>
      </div> 
  )
}

export default Products