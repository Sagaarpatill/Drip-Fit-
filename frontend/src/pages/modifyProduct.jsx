import React, { useState } from 'react';
import '../stylesheets/modifycar.css'
import { useNavigate } from 'react-router-dom';

const Modifyproduct = () => {
  const navigate = useNavigate();
  const [productName, setproductName] = useState('');
  const [updatedproductData, setUpdatedproductData] = useState({
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
  const [message, setMessage] = useState('');

  const handleModify = async () => {
    try {
      console.log(productName)
      const response = await fetch(`http://localhost:3001/api/product/modify/${productName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedproductData),
      });

      if (!response.ok) {
        throw new Error('Failed to modify product');
      }

      const modifiedproduct = await response.json();
      setMessage(`product "${modifiedproduct.Name}" modified successfully!`);
      window.alert("product details modified successfully!");
      navigate('/admin')
    } catch (error) {
      setMessage('Error modifying product');
      console.error('Error modifying product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Size') {
      // Convert the comma-separated string to an array
      const sizeArray = value.split(',');
      setUpdatedproductData((prevData) => ({ ...prevData, [name]: sizeArray }));
    } else {
      setUpdatedproductData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <div className='modify-container'>
      <div className='modify-section'>
      <h2>Modify product</h2>
      <label>
        Enter product Name:
        <br/>
        <input
          type="text"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
          placeholder="Enter product name"
        />
      </label>
      <br />
      <label>
        Modify product Name:
        <br/>
        <input
          type="text"
          name="Name"
          value={updatedproductData.Name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Modify product Type:
        <br/>
        <input
          type="text"
          name="Category"
          value={updatedproductData.Category}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Make:
        <br/>
        <input
          type="text"
          name="Brand"
          value={updatedproductData.Brand}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Price:
        <br/>
        <input
          type="text"
          name="Price"
          value={updatedproductData.Price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Image:
        <br/>
        <input
          type="text"
          name="Image"
          value={updatedproductData.Image}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Description:
        <br/>
        <textarea
          name="Desc"
          value={updatedproductData.Desc}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Color:
        <br/>
        <input
          type="text"
          name="Color"
          value={updatedproductData.Color}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Gender:
        <br/>
        <input
          type="text"
          name="Gender"
          value={updatedproductData.Gender}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Modify product Size:
        <br/>
        <input
          type="text"
          name="Size"
          value={updatedproductData.Size.join(',')}
          onChange={handleChange}
        />
      </label>
      <br />

      <button onClick={handleModify}>Modify product</button>
      <p>{message}</p>
      </div>
    </div>
  );
};

export default Modifyproduct;
