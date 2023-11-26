
import React, { useState } from 'react';
import '../stylesheets/deletecar.css'
import { useNavigate } from 'react-router-dom';

const Deleteproduct = () => {
  const navigate = useNavigate();
  const [productName, setproductName] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/product/delete/${productName}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      const deletedproduct = await response.json();
      setMessage(`product "${deletedproduct.Name}" deleted successfully!`);
      window.alert("product deleted successfully!");
      navigate('/admin');
    } catch (error) {
      setMessage('Error deleting product');
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className='delete-container'>
      <div className='delete-section'>
      <h2>Delete product</h2>
      <label>
        Enter product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
          placeholder="Enter product name"
        />
      </label>
      <br />
      <button onClick={handleDelete}>Delete product</button>
      <p>{message}</p>
      </div>
    </div>
  );
};

export default Deleteproduct;
