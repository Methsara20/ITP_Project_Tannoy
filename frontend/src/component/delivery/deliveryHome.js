// deliveryHome.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/deliveryHome.css'; // Import the CSS file

const DeliveryHome = () => {
  const navigate = useNavigate();

  // Function to handle redirection to home page
  const handleDeliveryClick = () => {
    navigate('/'); // Navigates to the home page
  };

  return (
    <div className="home-wrapper">
      <h2 className="title">Quick Track Your Package</h2>
      <p className="subtitle">Fast & Free Shipping #Wheneverthingseasier</p>
      <input
        type="text"
        placeholder="Enter Your Tracking number here..."
        className="input-box"
      />
      <div className="button-wrapper">
        <button className="button button-primary">Add Delivery Request</button>
        <button className="button" onClick={handleDeliveryClick}>
          View all delivery
        </button>
      </div>
    </div>
  );
};

export default DeliveryHome;