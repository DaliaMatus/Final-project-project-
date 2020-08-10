import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import{useSelector, useDispatch} from 'react-redux';

import { detailsProduct } from '../../actions/productActions';

function Products(props) {
    const [qty, setQty]=useState(1);
    const productDetails = useSelector(state =>state.productDetails);
    const{product, loading,error}= productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            //
        };
    }, [])
        return (
            <div>
                <div className="back-to-result">
                    <Link to="/">Back to Result</Link>
                </div>

                {loading ? <div className='loading'>
                        <div className='loading1'></div>
                        <div className='loading2'></div>
                        </div> :
                    error ? <div>{error}</div> :
                        (
                            <div className="products__details">
                                <div className="details-image">
                                    <img src={product.image} alt='product'/>
                                </div>
                                <div className="details-info">
                                    <ul>
                                        <li>
                                            <h1>{product.name}</h1>
                                        </li>
                                        <li>
                                            {product.stars} Stars ({product.reviews} Reviews)
                                        </li>
                                        <li className="product-price">
                                            ${product.price}
                                        </li>
                                        <li>
                                            Description:
                                            <div>
                                                {product.description}
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className='details-action'>
                                    <ul>
                                        <li className="product-price">
                                        ${product.price}
                                        </li> 
                                        <li>
                                        Status:{product.status}
                                        </li> 
                                        <li>                              
                                            Quantity: <select value={qty} onChange={(e) =>{setQty(e.target.value)}}>
                                                {[...Array(product.countInStock).keys()].map(x=>
                                                   <option key={x+1} value={x+1}>{x+1}</option> 
                                                    )}
                                            </select>
                                        </li>
                                        <li>
                                            <button>Add to Cart</button>
                                        </li> 
                                    </ul>
                                </div>

                            </div>
                        )                    
                }
            </div>
        )
    }

export default Products;