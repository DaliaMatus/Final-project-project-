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
                 <img src='' alt='product'/>
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


