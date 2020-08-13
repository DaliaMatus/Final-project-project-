import React, { Component } from 'react';
import { BrowserRouter,Route, Link } from "react-router-dom";

import Home from './route/home';
import Products from './route/products';
import Cart from './route/cart';
import Signin from './route/signin';

export default class App extends Component {
  render() {
    const openMenu=()=> {
      document.querySelector('.app__aside').classList.add('open');
    };

    const closeMenu=()=>{
      document.querySelector('.app__aside').classList.remove('open');
    };
    return(
      <BrowserRouter>
        <div className='app'>
          <header className='app__header'>
            <div className='app__header-first'>
              <button onClick={openMenu}>
                <i className="fas fa-bars" ></i>
              </button>
              <Link to='/'> Sweatshirts</Link>
            </div>
            <div className='app__header-second'>
              <a href='cart.js'>Cart </a>
              <Link to='/signin'>Sign in</Link>
            </div>
          </header>
          <aside className='app__aside'>
            <h3>Colors</h3>
            <button onClick={closeMenu}>
              <i className="far fa-window-close"></i>
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
              <Route exact path="/" component={Home}/>
              <Route  path="/product/:id" component={Products}/>
              <Route  path="/cart/:id?" component={Cart}/>
              <Route  path="/signin" component={Signin}/>
            </div>
          </main>
          <footer className='app__footer'>
            ©1997-2020  All right reserved
          </footer>        
        </div>
      </BrowserRouter>
    );
  }
}


