import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch}from 'react-redux';
import {listProducts} from '../../actions/productActions';

     
function Home(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const color = props.match.params.id ? props.match.params.id : '';  
  const productList =useSelector(state => state.productList);
  const {products, loading, error}=productList;
  const dispatch =useDispatch();

    useEffect(() =>{
      dispatch(listProducts(color));
      return()=>{
        //
      };
    }, [color]);
    
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(listProducts(color, searchKeyword))
    }
        return <div>
        {color &&
          <h2 className='color'>{color}</h2>}
        <ul className="search">
          <li>
            <form onSubmit={submitHandler}>
              <li>
                <input placeholder='Search' name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
              </li>
              <li>
                <button className='button signin' type="submit"><i class="fas fa-search"></i></button>
              </li>
            </form>
          </li>
        </ul>
        {loading ? <div className='loading'>
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
                    <div className='product-rating'>{product.stars} Stars ({product.reviews} Reviews)</div>
                    <h3>Sold</h3>
                    <progress className='product-progress' min='0' max='100' value='25'></progress>
                  </div>
                </li>)
              }                                          
            </ul>
          }
      </div>
    }
 

export default Home;