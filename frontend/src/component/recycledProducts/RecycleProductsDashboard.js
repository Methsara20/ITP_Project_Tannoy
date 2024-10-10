import React , {useState , useEffect} from 'react';
import axios from "axios";
import "./RecycleProductsDashboard.css";
import RecycleProductSidebar from "./RecycleProductSidebar";

const RecycleProductsDashboard = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getData = () => {
            axios
            .get("http://localhost:5000/recyclingProducts")
            .then(response => {
                setProducts(response.data.RecyclingProducts);
                setFilteredProducts(response.data.RecyclingProducts);
            })
            .catch(error => console.log(error));
        };
      
        getData();
    }, []);
                
    const countTotal = () => {
        return filteredProducts.length;
    };
    const countCompleteStatus = () => {
        return filteredProducts.filter(product => product.status.toLowerCase() === 'complete').length;
    };

    const countIncompleteStatus = () => {
        return filteredProducts.filter(product => product.status.toLowerCase() === 'inprogress').length;
    };

    const countRejectStatus = () => {
        return filteredProducts.filter(product => product.status.toLowerCase() === 'reject').length;
    };
    
    const countAQuality = () => {
        return filteredProducts.filter(product => product.quality.toLowerCase() === 'a').length;
    };

    const countBQuality = () => {
        return filteredProducts.filter(product => product.quality.toLowerCase() === 'b').length;
    };

    const countCQuality = () => {
        return filteredProducts.filter(product => product.quality.toLowerCase() === 'c').length;
    };

  return (
    <>
    <div id='body-div'>
        <div id='sidebar-section'>
        < RecycleProductSidebar /></div>
        <div id='component-div'>
        <div id='recycle-product-dashbord'>
        <div id='RecycleProductsDashBoard'>
           <div id='RecycleProductsLeftDiv'>
                <div>
                    <p className='RecycleProductsLeftDashboardTitle'>Recycling Dashboard</p> 
                    <a href='/recycling-products' id='RecyclingProductsButton-a'><button id='RecyclingProductsButton'>Recycling Products</button></a>
                    <a href='/recycled-products' id='RecycledProductsButton-a'><button id='RecycledProductsButton'>Recycled Products</button></a>
                    <div id='image-div'>
                    </div>
                </div>
            </div>
            <div id='RecycleProductsRightDiv'>
                <ul>
                    <a href="/recycled-products"><ui>Complete</ui></a>
                    <a href="/recycling-products"><ui>In Progress</ui></a>
                    <a href="/recycling-products"><ui>Reject</ui></a>
                    <a href="/recycling-products"><ui>Quality A</ui></a>
                    <a href="/recycling-products"><ui>Quality B</ui></a>
                    <a href="/recycling-products"><ui>Quality C</ui></a>
                    <a href="/recycling-products"><ui>Totle Recycles</ui></a>
                </ul>
                <ul>
                    <a href="/recycled-products"><ui>{countCompleteStatus()}</ui></a>
                    <a href="/recycling-products"><ui>{countIncompleteStatus()}</ui></a>
                    <a href="/recycling-products"><ui>{countRejectStatus()}</ui></a>
                    <a href="/recycling-products"><ui>{countAQuality()}</ui></a>
                    <a href="/recycling-products"><ui>{countBQuality()}</ui></a>
                    <a href="/recycling-products"><ui>{countCQuality()}</ui></a>
                    <a href="/recycling-products"><ui>{countTotal()}</ui></a>
                </ul>
            </div>
        </div>
    </div>
    </div>
    </div>
  </>
  )
}

export default RecycleProductsDashboard