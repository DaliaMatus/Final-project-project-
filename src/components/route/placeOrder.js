import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';

import CheckOut from '../checkOut';


function PlaceOrder(props){
    const cart = useSelector(state => state.cart);

    const { cartItems, shipping, payment } = cart;
    if (!shipping.address) {
        props.history.push("/shipping");
    } else if (!payment.paymentMethod) {
        props.history.push("/payment");
    }

    var subtotal = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    subtotal=subtotal.toFixed(2);
    const shippingPrice = subtotal > 500 ? 0 : 30;
    var tax= 0.16 *subtotal;
    tax=tax.toFixed(2);
    var taxPrice = 1.16 ;
    var total = subtotal * taxPrice + shippingPrice;
    total=total.toFixed(2);

    const dispatch = useDispatch();


    const checkoutHandler = () => {
        props.history.push("/order");
    }
    return(
        <div>
            <CheckOut step1 step2 step3 step4></CheckOut>
            <div className='placeorder'>
                <div className="placeorder-info">
                    <div>
                        <h3>
                            Shipping
                        </h3>
                        <div>
                            {cart.shipping.address}, {cart.shipping.city},{cart.shipping.postalCode}, {cart.shipping.country}
                        </div>
                    </div>
                    <div>
                        <h3>
                            Payment
                        </h3>
                        <div>
                            Payment Method: {cart.payment.paymentMethod}
                        </div>
                    </div>
                    <div>
                        <ul className="cart-list-container">
                            <li>
                                <h3>
                                    Shopping Cart
                                </h3>
                                <div className='price'>
                                    Unit Price
                                </div>
                            </li>
                            {
                            cartItems.length === 0 ?
                                <div>
                                    Cart is empty
                                </div>
                                :
                                cartItems.map(item =>
                                    <li>
                                        <div className="cart-image">
                                            <img src={item.image} alt="product" />
                                        </div>
                                        <div className="cart-name">
                                            <div className='name'>
                                                <Link to={"/product/" + item.product}>
                                                {item.name}
                                                </Link>
                                            </div>
                                            <div className='qty'>
                                                Qty: {item.qty}
                                            </div>
                                        </div>
                                        <div className="cart-price">
                                            ${item.price}
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <div className="placeorder-action">
                    <ul>
                        <li>
                            <h3>Order Summary</h3>
                        </li>
                        <li>
                            <div>Subtotal</div>
                            <div>${subtotal}</div>
                        </li>
                        <li>
                            <div>Shipping</div>
                            <div>${shippingPrice}</div>
                        </li>
                        <li>
                            <div>Tax</div>
                            <div>${tax}</div>
                        </li>
                        <li>
                            <div>Order Total</div>
                            <div>${total}</div>
                        </li>
                        <li>
                            <button className="button signin place" onClick={checkoutHandler} >Place Order</button>
                        </li>
                    </ul>
                </div>      
            </div>
        </div>
    )
}

export default PlaceOrder;