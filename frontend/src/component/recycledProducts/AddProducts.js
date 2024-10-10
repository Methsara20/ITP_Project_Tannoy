import React, { useState } from 'react';
import axios from 'axios';
import './AddProducts.css';
import RecycleProductSidebar from "./RecycleProductSidebar";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName:"",
    productId:"",
    quantity:"",
    quality:"",
    date:"",
    status:"",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post("http://localhost:5000/Products/", formData);

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to submit the form");
      }

      setSuccessMessage("Form submitted successfully!");
      setFormData({
        productName:"",
        productId:"",
        quantity:"",
        quality:"",
        date:"",
        status:"",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div id='body-div'>
        <div id='sidebar-section'>
        < RecycleProductSidebar /></div>
        <div id='component-div'>
          <div className="form-div">
              <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Enter Product Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="productId">Product Id</label>
                <input
                  type="text"
                  id="productId"
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                  placeholder="Enter product Id"
                  required
                />
              </div>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                  required
                />
              </div>
              <div>
                <label htmlFor="quality">Quality</label>
                <input
                  type="text"
                  id="quality"
                  name="quality"
                  value={formData.quality}
                  onChange={handleChange}
                  placeholder="Enter quality"
                  required
                />
              </div>
              <div>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="stage">Stage</label>
                <input
                  type="text"
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  placeholder="Enter status"
                  required
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {error && <p style={{ color: "red" }}>{error}</p>}
              {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
