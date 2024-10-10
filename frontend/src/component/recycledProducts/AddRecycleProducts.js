import React, { useState , useEffect } from "react";
import axios from "axios";
import "./AddRecycleProducts.css";
import RecycleProductSidebar from "./RecycleProductSidebar";

const RecycleProductForm = () => {
  const [formData, setFormData] = useState({
    recyclingProductName: "",
    quantity: "",
    quality: "",
    date: "",
    stage: "",
    status:""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const [rawMaterials, setRawMaterials] = useState([]);

  // Fetch raw material data from the API
  useEffect(() => {
    const fetchRawMaterials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setRawMaterials(response.data);
      } catch (error) {
        console.error("Error fetching Raw Material Name :", error);
      }
    };
    fetchRawMaterials();
  }, []);

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
      const response = await axios.post("http://localhost:5000/recyclingProducts/", formData);

      if (response.status !== 200 && response.status !== 201) {
        throw new Error("Failed to submit the form");
      }

      setSuccessMessage("Form submitted successfully!");
      setFormData({
        recyclingProductName: "",
        quantity: "",
        quality: "",
        date: "",
        stage: "",
        status:""
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
                <label htmlFor="recyclingProductName">Raw Material Name</label>
                <select 
                id="recyclingProductName"
                name="recyclingProductName"
                value={formData.recyclingProductName}
                onChange={handleChange}
                required>
                  <option value="">--Select a Raw Material--</option>
                {rawMaterials.map((item) => (
                  <option 
                    key={item.itemName} 
                    value={item.itemName}
                  >
                    {item.itemName}
                  </option>
                ))}
                </select>
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
                <select
                  id="stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                  required
                >
                  <option>Select Stage</option>
                    <option value="SORTING">SORTING</option>
                    <option value="CLEANING">CLEANING</option>
                    <option value="MELTING">MELTING</option>
                    <option value="SHREDDING">SHREDDING</option>
                    <option value="PELLETIZING">PELLETIZING</option>
                </select>
              </div>

              <div>
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option>Select Status</option>
                    <option value="REJECT">REJECT</option>
                    <option value="INPROGRESS">INPROGRESS</option>
                    <option value="COMPLETE">COMPLETE</option>
                </select>
              </div>
              <div>
                <label htmlFor="machineName">Machine Name</label>
                <input
                  type="text"
                  id="machineName"
                  name="machineName"
                  value={formData.machineName}
                  onChange={handleChange}
                  placeholder="Enter machine name"
                  required
                />
              </div>
              <div>
                <label htmlFor="machineCondition">Machine Status</label>
                <select
                  id="machineCondition"
                  name="machineCondition"
                  value={formData.machineCondition}
                  onChange={handleChange}
                  required
                >
                  <option>Select Status</option>
                    <option value="BROKEN">BROKEN</option>
                    <option value="GOOD">GOOD</option>
                </select>
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

export default RecycleProductForm;
