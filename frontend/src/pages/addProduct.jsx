import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/addcar.css'
const AddProduct = () => {
    const navigate = useNavigate();
  const [productData, setproductData] = useState({
    Name: '',
    Category: '',
    Brand: '',
    Price:'',
    Image: '',
    Desc: '',
    Color: '',
    Gender: '',
    Size: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3001/product/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!res.ok) {
        const error = new Error(res.statusText);
        error.response = res;
        throw error;
      }

      const addedproduct = await res.json();
      console.log('Product added successfully:', addedproduct);
      window.alert("Product added successfully!");
      navigate('/admin')
      // Handle success, e.g., show a success message or redirect
    } catch (error) {
      console.error('Error adding product:', error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className='addproduct-container'>
      <div className='addproduct-section'>  
      <h2>Add product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input type="text" name="Name" value={productData.Name} onChange={handleChange} required/>
        </label>
        <label>
          Category:
          <br/>
          <input type="text" name="Category" value={productData.Category} onChange={handleChange} required/>
        </label>
        <label>
          Brand:
          <br/>
          <input type="text" name="Brand" value={productData.Brand} onChange={handleChange} required/>
        </label>
        <label>
          Price:
          <br/>
          <input type="text" name="Price" value={productData.Price} onChange={handleChange} required/>
        </label>
        <label>
          Color:
          <br/>
          <input type="text" name="Color" value={productData.Color} onChange={handleChange} required/>
        </label>
        <label>
          Gender:
          <br/>
          <input type="text" name="Gender" value={productData.Gender} onChange={handleChange} required/>
        </label>
        <label>
          Size:
          <br/>
          <input type="array" name="Size" value={productData.Size} onChange={handleChange} required/>
        </label>
        <label>
          Image:
          <br/>
          <input type="text" name="Image" value={productData.Image} onChange={handleChange} required/>
        </label>
        <label>
          Description:
          <br/>
          <textarea name="Desc" value={productData.Desc} onChange={handleChange} required/>
        </label>
        <button type="submit">Add Product</button>
      </form>
      </div>
    </div>
  );
};

export default AddProduct;
