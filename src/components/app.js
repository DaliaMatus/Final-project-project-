import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return(
      <div className='app'>
        <header className='app__header'>
          <div className='app__header-first'>
            <a href='app.js'>Sweatshirts</a>
          </div>
          <div className='app__header-second'>
            <a href='cart.js'>Cart</a>
            <a href='signin.js'>Sign in</a>
          </div>
        </header>
        <main className='app__main'>
          <div className='app__main-content'>
          <ul className='app__main-products'>
            <li>
              <div className='app__main-product'>
                 <img src='/images/sudadera-blanca.jpg' alt='product'/>
                 <div className='product-name'>
                   <a href='product.js'>Harry Potter Sweatshirt</a>
                  </div>
                 <div className='product-brand'>Mundo Harry Potter</div>
                 <div className='product-price'>$4.37</div>
                 <div className='product-rating'>6.1 Stars (21 Reviews)</div>
                 <h3>Sold</h3>
                 <progress className='product-progress' min='0' max='100' value='25'></progress>
              </div>
            </li>
            <li>
              <div className='app__main-product'>
                 <img src='/images/sudadera-blanca.jpg' alt='product'/>
                 <div className='product-name'>
                   <a href='product.js'>Harry Potter Sweatshirt</a>
                  </div>
                 <div className='product-brand'>Mundo Harry Potter</div>
                 <div className='product-price'>$4.37</div>
                 <div className='product-rating'>6.1 Stars (21 Reviews)</div>
                 <h3>Sold</h3>
                 <progress className='product-progress' min='0' max='100' value='12'></progress>
              </div>
            </li>
            <li>
              <div className='app__main-product'>
                 <img src='/images/sudadera-blanca.jpg' alt='product'/>
                 <div className='product-name'>
                   <a href='product.js'>Harry Potter Sweatshirt</a>
                  </div>
                 <div className='product-brand'>Mundo Harry Potter</div>
                 <div className='product-price'>$4.37</div>
                 <div className='product-rating'>6.1 Stars (21 Reviews)</div>
                 <h3>Sold</h3>
                 <progress className='product-progress' min='0' max='100' value='78'></progress>
              </div>
            </li>
            <li>
              <div className='app__main-product'>
                 <img src='/images/sudadera-blanca.jpg' alt='product'/>
                 <div className='product-name'>
                   <a href='product.js'>Harry Potter Sweatshirt</a>
                  </div>
                 <div className='product-brand'>Mundo Harry Potter</div>
                 <div className='product-price'>$4.37</div>
                 <div className='product-rating'>6.1 Stars (21 Reviews)</div>
                 <h3>Sold</h3>
                 <progress className='product-progress' min='0' max='100' value='36'></progress>
              </div>
            </li>
            <li>
              <div className='app__main-product'>
                 <img src='/images/sudadera-blanca.jpg' alt='product'/>
                 <div className='product-name'>
                   <a href='product.js'>Harry Potter Sweatshirt</a>
                  </div>
                 <div className='product-brand'>Mundo Harry Potter</div>
                 <div className='product-price'>$4.37</div>
                 <div className='product-rating'>6.1 Stars (21 Reviews)</div>
                 <h3>Sold</h3>
                 <progress className='product-progress' min='0' max='100' value='52'></progress>
              </div>
            </li>
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


