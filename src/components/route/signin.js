import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {signin} from '../../actions/userActions';

function Signin(props){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect=props.location.search?props.location.search.split("=")[1]:"/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

  }

  return(
        <div className='form'>
            <form onSubmit={submitHandler} >
                <ul className="form-container">
                    <li><h2>Sign in</h2></li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button signin">Sign in</button>
                    </li>
                    <li>
                        Not registered? Create account 
                    </li>
                    <li>
                        <Link to={redirect === "/" ? "register" :"register?redirect=" + redirect} className="button account text-center" >Create your account</Link>
                    </li>
                </ul>
            </form>
        </div> 
    )  
}

export default Signin;
