import React from 'react';
import '../../styles/Header.css'; // Assuming the same CSS is used for layout

const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar-logo">
      <h2>Tannoy Electricals</h2> 
    </div>
    <nav className="sidebar-nav">
      <ul>
        <li><a href="/deliveryHome">Home</a></li>
        <li><a href="/parsel-list">Tracking</a></li>
        <li><a href="/delivery">Delivery Team</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  </div>
);

export default Sidebar;
