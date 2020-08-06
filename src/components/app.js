import React, { Component } from 'react';
import data from './database';

export default class App extends Component {
  render() {
    const openMenu=()=> {
      document.querySelector('.app__aside').classList.add('open');
    };

    const closeMenu=()=>{
      document.querySelector('.app__aside').classList.remove('open');
    };
    return(
      <div className='app'>
        <header className='app__header'>
          <div className='app__header-first'>
            <button onClick={openMenu}>
              <i class="fas fa-bars" ></i>
            </button>
            <a href='app.js'> Sweatshirts</a>
          </div>
          <div className='app__header-second'>
            <a href='cart.js'>Cart</a>
            <a href='signin.js'>Sign in</a>
          </div>
        </header>
        <aside className='app__aside'>
          <h3>Colors</h3>
          <button onClick={closeMenu}>
            <i class="far fa-window-close"></i>
          </button>
          <ul>           
            <li>
              <a href='app.js'>Black</a>
            </li>
            <li>
              <a href='app.js'>Gray</a>
            </li>
            <li>
              <a href='app.js'>Pink</a>
            </li>
            <li>
              <a href='app.js'>White</a>
            </li>
          </ul>
        </aside>
        <main className='app__main'>
          <div className='app__main-content'>
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
          </div>
        </main>
        <footer className='app__footer'>
          ©1997-2020  All right reserved
        </footer>        
      </div>
    );
  }
}


