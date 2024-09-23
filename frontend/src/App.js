import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import EmployeeDashboard from "./component/employee/EmployeeDashboard";
import AddEmployee from "./component/employee/AddEmployee";
import DisplayAttendance from "./component/employee/DisplayAttendance";
import MarkAttendance from "./component/employee/MarkAttendance";
import Home from "./component/home/home";
import Login from "./component/delivery/Login";
import DeliveryHome from "./component/delivery/deliveryHome"; 
import DisplayParselList from "./component/delivery/displayParselList";
import AddParselRequest from "./component/delivery/addDeliveryRequest";
import UpdateParselReq from "./component/delivery/updateParselReq";
import DeliveryRegister from "./component/delivery/Register";
import AddNewOrder from "./component/CRM/AddOrder/AddNewOrder";
import OrderDtails from "./component/CRM/OrderDtails/OrderDtails";
import UpdateOrder from "./component/CRM/UpdateOrder/UpdateOrder";
import CrmHome from "./component/CRM/CRMHome/CrmHome";
import CrmReport from "./component/CRM/CrmReport/CRMReport";
import EmployeeSalaryReport from "./component/employee/EmployeeSalaryReport";
import ProductDashboard from "./component/Inventory/ProductDashboard";
import AddProduct from "./component/Inventory/AddProduct";
import AddSupplier from "./component/Inventory/AddSupplier";
import StockDashboard from "./component/Inventory/StockDashboard";
import AddStock from "./component/Inventory/AddStock";
import SupplierDashboard from "./component/Inventory/SupplierDashboard";
import StockReport from "./component/Inventory/StockReport";
import CRMRegister from "./component/CRM/CRMRegister/Register";
import CRMLogin from "./component/CRM/CRMLogin/Login";
//Gangani
import RecycleProducts from "./component/recycledProducts/RecycleProducts";
import RecyclingProductsTable from "./component/recycledProducts/RecyclingProductsTable";
import RecycledProducts from "./component/recycledProducts/RecycledProducts";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-employee/:employeeId" element={<AddEmployee />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/deliveryHome" element={<DeliveryHome />} /> 
          <Route path="/parsel-list" element={<DisplayParselList />} />
          <Route path="/parsel-list/:id" element={<UpdateParselReq />} />
          <Route path="/Add-parsel" element={<AddParselRequest />} />
          <Route path="/register" element={<DeliveryRegister />} />
          <Route path="/mark-attendance" element={<MarkAttendance />} />  
          <Route path="/displayattendance" element={<DisplayAttendance />} />
          {/* Dilmi  */}
          <Route path="/addorder" element={<AddNewOrder />} />
          <Route path="/orderDetails" element={<OrderDtails />} />
          <Route path="/updateOrder/:Oid" element={<UpdateOrder />} /> 
          <Route path="/crmHome" element={<CrmHome />} />
          <Route path="/crmReport" element={<CrmReport />} />
          <Route path="/CRMRegi" element={<CRMRegister />} />
          <Route path="/CRMLogin" element={<CRMLogin />} />
          {/* Dilmi */}
          <Route path="/employeesalaryReport" element={<EmployeeSalaryReport/>} />
          <Route path="/productDashboard" element={<ProductDashboard/>} />
          <Route path="/Addproduct" element={<AddProduct/>} />
          <Route path="/Addproduct/:productId" element={<AddProduct />} />
          <Route path="/Addsupplier" element={<AddSupplier/>} />
          <Route path="/AddSupplier/:supplierId" element={<AddSupplier />} />
          <Route path="/stockDashboard" element={<StockDashboard/>} />
          <Route path="/addStock" element={<AddStock/>} />
          <Route path="/addStock/:itemId" element={<AddStock />} />
          <Route path="/supplierDashboard" element={<SupplierDashboard/>} />
          <Route path="/StockReport/:supplierId" element={<StockReport />} />
          <Route path="/recycle-product-dashbord" element={<RecycleProducts/>} /> {/* Gangani */}
          <Route path="/recycling-products" element={<RecyclingProductsTable/>} /> {/* Gangani */}
          <Route path="/recycled-products" element={<RecycledProducts/>} /> {/* Gangani */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
