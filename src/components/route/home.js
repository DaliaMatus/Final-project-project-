import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

     
function Home(props) {
    
  const [products, setProduct] =useState([]);

    useEffect(() =>{
      const fetchData = async ()=> {
        const {data} = await axios.get("/api/products");
        setProduct(data);
      }
      fetchData();
      return()=>{
        //
      };
    }, [])     
        return (
            <ul className='app__main-products'>
              {
                products.map(product=>
                <li key={product._id}>
                  <div className='app__main-product'>
                    <Link to={'/product/' + product._id}>
                        <img src={product.image} alt='product'/>
                    </Link>
                    <div className='product-name'>
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                    </div>
                    <div className='product-brand'>{product.brand}</div>
                    <div className='product-price'>${product.price}</div>
                    <div className='product-rating'>{product.stars} Stars ({product.reviews})</div>
                    <h3>Sold</h3>
                    <progress className='product-progress' min='0' max='100' value='25'></progress>
                  </div>
                </li>)
              }                                          
            </ul>
        )
    }
 

export default Home;