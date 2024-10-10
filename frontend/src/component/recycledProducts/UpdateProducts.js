import React, { useState, useEffect } from 'react';
import './UpdateProducts.css'; // You can style this as needed

const UpdateProductForm = ({ product, onSave, onCancel }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedProduct);
  };

  return (
    <div id="window">
    <div id="window-content">
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit} className='update-form'>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            name="productName" 
            value={updatedProduct.productName || ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Product ID</label>
          <input 
            type="text" 
            name="productId" 
            value={updatedProduct.productId || ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input 
            type="number" 
            name="quantity" 
            value={updatedProduct.quantity || ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Quality</label>
          <input 
            type="text" 
            name="quality" 
            value={updatedProduct.quality || ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            name="date" 
            value={updatedProduct.date ? updatedProduct.date.split('T')[0] : ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Status</label>
          <input 
            type="text" 
            name="status" 
            value={updatedProduct.status || ''} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-actions">
          <button type="submit" id='button-save'>Save</button>
          <button type="button" id='button-cancel' onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateProductForm;
