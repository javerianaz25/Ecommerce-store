import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateProduct() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    const newProduct = {
      title: title,
      category: category,
      price: price,
    };

    axios
      .post('http://localhost:3000/createProduct', newProduct)
      .then((result) => {
        console.log(result);
        // Add the new product to the Homeproduct array
        
        navigate('/adminproducts');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 forproduct">
      <div className="form-container p-5">
        <h1 className="form-heading mb-4">Add Product</h1>
        <form onSubmit={Submit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Enter email"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="Enter price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success my-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
