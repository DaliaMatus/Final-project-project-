import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {signin} from '../../actions/userActions';
import { listOrders, deleteOrder, saveOrder} from '../../actions/orderActions';

function Orders(props) {

  const orderList = useSelector(state => state.orderList);
  const { loading, orders, error } = orderList;

  const orderDelete = useSelector(state => state.orderDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = orderDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrders());
    return () => {
      //
    };
  }, [successDelete]);

  const deleteHandler = (order) => {
    dispatch(deleteOrder(order._id));
  }
  return (
    loading ? <div>Loading...</div> :
        <div className="content content-margined">
            <div className="order-header">
                <h3>Orders</h3>
            </div>
            <div className="order-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID</th>
                            <th>PAID AT</th>
                            <th>DELIVERED</th>
                            <th>DELIVERED AT</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (<tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.createdAt}</td>
                            <td>{order.total}</td>
                            <td>{order.user.name}</td>
                            <td>{order.isPaid.toString()}</td>
                            <td>{order.paidAt}</td>
                            <td>{order.isDelivered.toString()}</td>
                            <td>{order.deliveredAt}</td>
                            <td>
                                <Link to={"/order/" + order._id} className="button signin" >Details</Link>
                                {' '}
                                <button type="button" onClick={() => deleteHandler(order)} ><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Orders; 