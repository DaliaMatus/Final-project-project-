import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {detailsOrder} from '../../actions/orderActions';

function Order(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsOrder(props.match.params.id));
    return () => {
    };
  }, []);

  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;
  const payHandler = () => { };
  console.log(orderDetails)

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="order">
        <div className="order-info">
            <div>
                <h3>
                    Shipping
                </h3>
                <div>
                    {order.shipping.address}, {order.shipping.city},{order.shipping.postalCode}, {order.shipping.country}
                </div>
                <div>
                    {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
                </div>
            </div>
            <div>
                <h3>Payment</h3>
                <div>
                    Payment Method: {order.payment.paymentMethod}
                </div>
                <div>
                    {order.isPaid ? "Paid at " + order.paidAt : "Not Paid."}
                </div>
            </div>
            <div>
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div>
                            Price
                        </div>
                    </li>
                    {
                        order.orderItems.length === 0 ?
                            <div>
                                Cart is empty
                            </div>
                        :
                        order.orderItems.map(item =>
                            <li>
                                <div className="cart-image">
                                    <img src={item.image} alt="product" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div>
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
        <div className="order-action">
          <ul>
            <li>
              <button className="button signin full-width" onClick={payHandler} >Pay Now</button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Subtotal</div>
              <div>${order.subtotal}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>${order.shippingPrice}</div>
            </li>
            <li>
              <div>Tax</div>
              <div>${order.tax}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>${order.total}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
}

export default Order; 