import React from 'react';
import { BrowserRouter,Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Home from './route/home';
import Product from './route/product';
import Cart from './route/cart';
import Signin from './route/signin';
import Register from './route/register';
import Products from './route/products';
import Shipping from './route/shipping';
import Payment from './route/payment';
import PlaceOrder from './route/placeOrder';
import Profile from './route/profile';

function App(){

    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo}= userSignin;

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
              <Link to="/"> Sweatshirts</Link>
            </div>
            <div className='app__header-second'>
              <Link to='/cart/'>Cart </Link>
              {
                userInfo ? <Link to='/profile'>{userInfo.name}</Link>:
                <Link to='/signin'>Sign in</Link>
              }
              {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
              )}
            </div>
          </header>
          <aside className='app__aside'>
            <h3>Colors</h3>
            <button onClick={closeMenu}>
              <i className="far fa-window-close"></i>
            </button>
            <ul>           
              <li>
                <Link to ="/color/Black">Black</Link>
              </li>
              <li>
                <Link to ="/color/Gray">Gray</Link>
              </li>
              <li>
                <Link to ="/color/Pink">Pink</Link>
              </li>
              <li>
                <Link to ="/color/White">White</Link>
              </li>
            </ul>
          </aside>
          <main className='app__main'>
            <div className='app__main-content'>
              <Route exact path="/" component={Home}/>
              <Route path="/color/:id" component={Home} />
              <Route  path="/product/:id" component={Product}/>
              <Route  path="/cart/:id?" component={Cart}/>
              <Route  path="/signin" component={Signin}/>
              <Route  path="/register" component={Register}/>
              <Route  path="/products" component={Products}/>
              <Route  path="/shipping" component={Shipping}/>
              <Route path="/payment" component={Payment}/>
              <Route path="/placeorder" component={PlaceOrder}/>
              <Route path="/profile" component={Profile} />
            </div>
          </main>
          <footer className='app__footer'>
            ©Dalia Matus 1997-2020 | All right reserved
          </footer>        
        </div>
      </BrowserRouter>
    );
  }

export default App;


