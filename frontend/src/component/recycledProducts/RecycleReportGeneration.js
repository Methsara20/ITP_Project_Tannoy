import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
import './RecycleReportGeneration.css'; 
import RecycleProductSidebar from "./RecycleProductSidebar";

const RecycleReportGeneration = () => {
  const [completeProducts, setCompleteProducts] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedStage, setSelectedStage] = useState(''); 
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    const fetchCompleteProducts = () => {
      axios
        .get("http://localhost:5000/recyclingProducts")
        .then(response => {
          const filteredProducts = response.data.RecyclingProducts;
          setCompleteProducts(filteredProducts);
        })
        .catch(error => console.log(error));
    };

    fetchCompleteProducts();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const filterProducts = () => {
    let filtered = completeProducts;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      filtered = filtered.filter(product => {
        const productDate = new Date(product.date);
        return productDate >= start && productDate <= end;
      });
    }

    if (selectedStage) {
      filtered = filtered.filter(product => product.stage === selectedStage);
    }

    if (selectedStatus) {
      filtered = filtered.filter(product => product.status === selectedStatus);
    }

    return filtered;
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const filteredProducts = filterProducts();

    doc.setFontSize(18);
    doc.text('Recycle Products Report', 14, 22);

    const tableColumn = ['Raw Material Name', 'Quantity', 'Quality', 'Date', 'Stage', 'Status'];
    const tableRows = [];

    filteredProducts.forEach(product => {
      const productData = [
        product.recyclingProductName,
        product.quantity,
        product.quality,
        formatDate(product.date),
        product.stage,
        product.status
      ];
      tableRows.push(productData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save('RecycleProductsReport.pdf');
  };

  return (
    <>
    <div id='body-div'>
        <div id='sidebar-section'>
        < RecycleProductSidebar /></div>
        <div id='component-div'>
          <div className="complete-report-container">
            <h2 className="report-title">Recycle Products Report</h2>
            <div className="filter-container">
              <div className="input-filter-div">
                <label>
                Start Date:
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </label>
              </div>
              <div className="input-filter-div">
                <label>
                End Date:
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </label>
              </div>

              <div className="input-filter-div">
                <label>
                Stage:
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                >
                  <option value="">All Stages</option>
                  <option value="SORTING">SORTING</option>
                  <option value="CLEANING">CLEANING</option>
                  <option value="MELTING">MELTING</option>
                  <option value="SHREDDING">SHREDDING</option>
                  <option value="PELLETIZING">PELLETIZING</option>
                </select>
              </label>
              </div>

              <div className="input-filter-div">
                <label>
                Status:
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">All Statuses</option>
                  <option value="REJECT">REJECT</option>
                  <option value="INPROGRESS">INPROGRESS</option>
                  <option value="COMPLETE">COMPLETE</option>
                </select>
              </label>
              </div>
            </div>
            <div className='report-download-button-div'>
              <button onClick={handleDownloadPDF} className="report-download-button">Download PDF</button>
            </div>
            
            <div className="report-table-container">
              <table className="report-table">
                <thead>
                  <tr>
                    <th>Raw Material Name</th>
                    <th>Quantity</th>
                    <th>Quality</th>
                    <th>Date</th>
                    <th>Stage</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filterProducts().map(product => (
                    <tr key={product._id}>
                      <td>{product.recyclingProductName}</td>
                      <td>{product.quantity}</td>
                      <td>{product.quality}</td>
                      <td>{formatDate(product.date)}</td>
                      <td>{product.stage}</td>
                      <td>{product.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default RecycleReportGeneration;
