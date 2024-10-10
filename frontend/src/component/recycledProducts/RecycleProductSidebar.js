import React from 'react';
import './RecycleProductSidebar.css';

const Sidebar = () => {
    return (
        <>
        <div id="sidebar">
            <ul>
                <a href="/recycle-product-dashbord"><li>Recycle Dashboard</li></a>
                <a href="/recycling-products"><li>Recycling Products</li></a>
                <a href="/recycled-products"><li>Recycled Products</li></a>
                <a href="/add-recycle-product"><li>Add Recycle Product</li></a>
                <a href="/recycle-product-report"><li>Recycle Product Report</li></a>
                <a href="/products"><li>Product List</li></a>
                <a href="/add-product"><li>Add Product</li></a>
            </ul>
        </div>
        </>
    );
};

export default Sidebar;
