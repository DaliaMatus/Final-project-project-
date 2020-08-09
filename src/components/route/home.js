import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch}from 'react-redux';
import {listProducts} from '../../actions/productActions';

     
function Home(props) {
    
  const productList =useSelector(state => state.productList);
  const {products, loading, error}=productList;
  const dispatch =useDispatch();

    useEffect(() =>{
      dispatch(listProducts());
      return()=>{
        //
      };
    }, [])     
        return loading ? <div className='loading'>
          <div className='loading1'></div>
          <div className='loading2'></div>
        </div> :
          error ? <div>{error}</div> :
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
    }
 

export default Home;