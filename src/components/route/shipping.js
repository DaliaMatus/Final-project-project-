import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import {saveShipping} from '../../actions/cartActions';
import CheckOut from '../checkOut';

function Shipping(props){
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');
  
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({ address, city, postalCode, country }));
        props.history.push('payment');
    }
  
  
    return(
        <div>
            <CheckOut step1 step2></CheckOut>
            <div className='form'>
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li><h2>Shipping</h2></li>
                        <li>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input 
                                type="text" 
                                name="address" 
                                id="address" 
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="city">
                                City
                            </label>
                            <input 
                                type="text" 
                                name="city" 
                                id="city" 
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="postalCode">
                                Postal Code
                            </label>
                            <input 
                                type="text" 
                                name="postalCode" 
                                id="postalCode" 
                                placeholder="Postal Code"
                                onChange={(e) => setPostalCode(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="country">
                                Country
                            </label>
                            <input 
                                type="text" 
                                name="country" 
                                id="country" 
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button signin">Continue</button>
                        </li>
                    </ul>
                </form>
            </div> 
        </div>
    )
}

export default Shipping;