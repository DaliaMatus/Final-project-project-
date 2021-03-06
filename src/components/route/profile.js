import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logout, update } from '../../actions/userActions';

function Profile(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  
  useEffect(() => {
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
   
    return () => {

    };
  }, [userInfo])

  return (
            <div className="profile">
                <div className="profile-info">
                    <div className="form">
                        <form onSubmit={submitHandler} >
                            <ul className="form-container">
                                <li>
                                    <h2>User Profile</h2>
                                </li>
                                <li>
                                    {loading && <div>Loading...</div>}
                                    {error && <div>{error}</div>}
                                    {success && <div>Profile Saved Successfully.</div>}
                                </li>
                                <li>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input 
                                        value={name} 
                                        type="name" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Name"
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </li>
                                <li>
                                    <label htmlFor="email">
                                        Email
                                    </label>
                                    <input 
                                        value={email} 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </li>
                                <li>
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input 
                                        value={password} 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}>
                                    </input>
                                </li>
                                <li>
                                    <button type="submit" className="button signin">Update</button>
                                </li>
                                <li>
                                    <button type="button" onClick={handleLogout} className="button signin">Logout</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
}

export default Profile;