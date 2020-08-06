import React from 'react';
import {Link} from "react-router-dom";

import data from '../database';

function Products(props) {
    const product=data.products.find(x=> x._id === props.match.params.id);
        return (
            <div>
                <div className="back-to-result">
                    <Link to="/">Back to Result</Link>
                </div>
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
                                Quantity: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </li>
                            <li>
                                <button>Add to Cart</button>
                            </li> 
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
export default Products;