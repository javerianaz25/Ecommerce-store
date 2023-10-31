import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Adminproducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the server when the component mounts
    axios.get('http://localhost:3000/api/getallproducts')
      .then((response) => {
        // Update the product data in the context
       
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className='wrapper'>
      <div className='content'>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.Title}</td>
                <td>{product.Cat}</td>
                <td>${product.Price}</td>
                <td>
                  <Link to={`/update/${product._id}`} className='btn btn-success'>
                    Update
                  </Link>
                  <button className='btn btn-danger mx-2'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminproducts;
