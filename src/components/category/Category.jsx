import React,{useState,useEffect} from 'react'
import Comfort from './../../assets/comfort.jpg'
import Storage from './../../assets/storage.jpg'
import Lighting from './../../assets/lighting.jpg'
import Surface from './../../assets/surface.jpg'
import axios from 'axios'
import './category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        axios.get('https://ecommerce-project-f8fc5-default-rtdb.europe-west1.firebasedatabase.app/categories.json').
        then(res => setData(res.data)).catch(err => console.log(err))
    },[])
    console.log(data)
    if(data == null){return(<p>Loading</p>)}
    return (
        
        <div className='category'>
            
            <div className='category-row'>
                <div className='category-col'>
                    <img className='category-image' src={data[0].img} />
                    <Link className='image-cover-text' to={`/products/${data[0].id}`}>{data[0].title}</Link>
                </div>
                <div className='category-col'>
                    <img className='category-image' src={data[1].img} />
                    <Link className='image-cover-text' to={`/products/${data[1].id}`}>{data[1].title}</Link>
                </div>
            </div>
            <div className='category-row'>
                <div className='category-col'>
                    <img className='category-image' src={data[2].img} />
                    <Link className='image-cover-text' to={`/products/${data[2].id}`}>{data[2].title}</Link>
                </div>
                <div className='category-col'>
                    <img className='category-image' src={data[3].img} />
                    <Link className='image-cover-text' to={`/products/${data[3].id}`}>{data[3].title}</Link>                
                </div>
            </div>
            
        </div>
    )
}

export default Category