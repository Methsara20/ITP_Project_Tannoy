import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Products.css'; 
import RecycleProductSidebar from './RecycleProductSidebar';
import UpdateProductForm from './UpdateProducts';

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/Products");
      console.log(data.Products);
      setProducts(data.Products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/Products/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleSave = async (updatedProduct) => {
    try {
      await axios.put(`http://localhost:5000/Products/${updatedProduct._id}`, updatedProduct);
      await fetchProducts();
      setIsEditing(false);
      setCurrentProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toISOString().split('T')[0];
  };

  const filteredProducts = products.filter(product => 
    product.productName && product.productName.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!startDate || new Date(product.date) >= new Date(startDate)) &&
    (!endDate || new Date(product.date) <= new Date(endDate))
  );

  const generateReportCSV = () => {
    const reportData = filteredProducts.map(product => ({
      Name: product.productName,
      ID: product.productId,
      Quantity: product.quantity,
      Quality: product.quality,
      Date: formatDate(product.date),
      Status: product.status,
    }));

    const csvContent = `data:text/csv;charset=utf-8,${reportData.map(e => Object.values(e).join(",")).join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateReportPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Product List', 14, 22); 
  
    const reportData = filteredProducts.map(product => ([
      product.productName,
      product.productId,
      product.quantity,
      product.quality,
      formatDate(product.date),
      product.status
    ]));
  
    // Adjust the position for the table
    doc.autoTable({
      head: [['Product Name', 'Product ID', 'Quantity', 'Quality', 'Date', 'Status']],
      body: reportData,
      startY: 30, // Start the table below the title
    });
  
    doc.save('products_report.pdf');
  };
  

  return (
    <div id='body-div'>
        <div id='sidebar-section'>
        < RecycleProductSidebar /></div>
        <div id='component-div'>
          <div id='sub-component-div'>
          <div>
            <h2 className="product-title">Products List and Report</h2>
          </div>
          <div className='page-title-div'>
            <input
              type="text"
              placeholder="Search by Product Name"
              id='search-product-input'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="date"
              className='date-input'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className='date-input'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <button id='AddProductButton' onClick={() => window.location.href = '/add-product'}>Add Product</button>
            <button id='GenerateReportButton' onClick={generateReportCSV}>Generate CSV Report</button>
            <button id='GeneratePDFButton' onClick={generateReportPDF}>Generate PDF Report</button>
          </div>
          <div id='table-div'>
            <table className='recycled-table'>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product ID</th>
                  <th>Quantity</th>
                  <th>Quality</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => (
                  <tr key={product._id}>
                    <td>{product.productName}</td>
                    <td>{product.productId}</td>
                    <td>{product.quantity}</td>
                    <td>{product.quality}</td>
                    <td>{formatDate(product.date)}</td>
                    <td>{product.status}</td>
                    <td>
                      <button id='update-button' onClick={() => handleUpdate(product)}>Update</button>
                    </td>
                    <td>
                      <button id='delete-button' onClick={() => handleDelete(product._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isEditing && currentProduct && (
              <UpdateProductForm 
                product={currentProduct} 
                onSave={handleSave} 
                onCancel={() => setIsEditing(false)} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
