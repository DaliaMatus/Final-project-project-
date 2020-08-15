import React,{useEffect, useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import {saveProduct, listProducts, deleteProduct} from '../../actions/productActions';

function Products(props){
    const[modalVisible,setModalVisible]=useState(false);
    const[id, setId]=useState('');
    const[name, setName]=useState('');
    const [price, setPrice]=useState('');
    const [image, setImage]=useState('');
    const [brand, setBrand]=useState('');
    const [color, setColor]=useState('');
    const [countInStock, setCountInStock]=useState('');
    const [description, setDescription]=useState('');
    const productList=useSelector(state => state.productList);
    const { loading, products, error } = productList;

    const productSave=useSelector(state => state.productSave);
    const {loading:loadingSave, success:successSave, error:errorSave }=productSave;

    const productDelete=useSelector(state => state.productDelete);
    const {loading:loadingDelete, success:successDelete, error:errorDelete}=productDelete;
    const dispatch=useDispatch();

    useEffect(() => {
        if (successSave) {
          setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
          //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImage(product.image);
        setBrand(product.brand);
        setColor(product.color);
        setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
          _id: id,
          name, price, image, brand, color,
          countInStock, description
        }));
    }

    const deleteHandler = (product) => {
        dispatch(deleteProduct(product._id));
    }

    return(
        <div className="content content-margined">
            <div className="product-header">
                <h3>Products</h3>
                <button className="button signin" onClick={() => openModal({})}>Create Product</button>
            </div>
            {modalVisible &&
                <div className="form">
                    <form onSubmit={submitHandler}>
                        <ul className="form-container">
                            <li>
                                <h2>Create Product</h2>
                            </li>
                            <li>
                                {loadingSave && <div className='loading'>
                                <div className='loading1'></div>
                                <div className='loading2'></div>
                                </div>}
                                {errorSave && <div>{error}</div>}
                            </li>
                            <li>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={name} 
                                    id="name" 
                                    onChange={(e) => setName(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="price">
                                    Price
                                </label>
                                <input 
                                    type="text" 
                                    name="price" 
                                    value={price} 
                                    id="price" 
                                    onChange={(e) => setPrice(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="image">
                                    Image
                                </label>
                                <input 
                                    type="text" 
                                    name="image" 
                                    value={image} 
                                    id="image" 
                                    onChange={(e) => setImage(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="brand">
                                    Brand
                                </label>
                                <input 
                                    type="text" 
                                    name="brand" 
                                    value={brand} 
                                    id="brand" 
                                    onChange={(e) => setBrand(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="countInStock">
                                    CountInStock
                                </label>
                                <input 
                                    type="text" 
                                    name="countInStock" 
                                    value={countInStock} 
                                    id="countInStock" 
                                    onChange={(e) => setCountInStock(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="color">
                                    Color
                                </label>
                                <input 
                                    type="text" 
                                    name="color" 
                                    value={color} 
                                    id="color" 
                                    onChange={(e) => setColor(e.target.value)}>
                                </input>
                            </li>
                            <li>
                                <label htmlFor="description">
                                    Description
                                </label>
                                <textarea 
                                    name="description" 
                                    value={description} 
                                    id="description" 
                                    onChange={(e) => setDescription(e.target.value)}>        
                                </textarea>
                            </li>
                            <li>
                                <button type="submit" className="button signin">{id ? "Update" : "Create"}</button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setModalVisible(false)} className="button signin">Back</button>
                            </li>
                        </ul>
                    </form>
                </div>
            }


            <div className="product-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Brand</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (<tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.color}</td>
                            <td>{product.brand}</td>
                            <td>
                            <button onClick={() => openModal(product)} ><i className="fas fa-edit"></i></button>
                            {' '}
                            <button onClick={() => deleteHandler(product)} ><i className="fas fa-trash"></i></button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products;