import React, { Component } from 'react';
import data from '../database';

export default class Home extends Component {
    render() {
        return (
            <ul className='app__main-products'>
              {
                data.products.map(product=>
                <li>
                  <div className='app__main-product'>
                    <img src={product.image} alt='product'/>
                    <div className='product-name'>
                      <a href='product.js'>{product.name}</a>
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
} 