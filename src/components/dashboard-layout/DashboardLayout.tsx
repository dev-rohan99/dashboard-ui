import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { MdOutlineDashboard, MdOutlineEdgesensorHigh, MdOutlineSell } from 'react-icons/md';
import { BsTruckFrontFill } from "react-icons/bs";
import "../../assets/styles/dashboard.scss";
import { FaLongArrowAltRight, FaSitemap, FaUsers } from 'react-icons/fa';
import DashboardHeader from '../dashboard-header/DashboardHeader';
import { TbFileInvoice } from "react-icons/tb";


const DashboardLayout: React.FC = () => {

    const [isOpenSidebar, setIsOpenSideBar] = useState(true);
    const location = useLocation();
    

    return (
      <>
      

        <div className="container-fluid">
          <div className="row">
            <div className={`col-md-2 sidebarWrap px-3 px-sm-0 px-sm-2 z-3 ${isOpenSidebar ? "" : "sidebarEffect"}`}>
              <div className="d-flex justify-content-start align-items-center py-4">
                {isOpenSidebar ? <img className="forDefault" style={{width:"100%",height:"30px",objectFit:"fill"}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-dark.svg" alt="logo" /> : ""}
                
                {isOpenSidebar ? "" : <img className="forMin" style={{width:"100%",height:"30px",objectFit:"fill"}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg" alt="logo" />}

                <img className="forMinOne" style={{width:"100%",height:"30px",objectFit:"fill"}} src="https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg" alt="logo" />
              </div>

              <div className="w-100">
                <span className={`position-absolute barOpenAndCloseBtn rounded shadow p-2 d-flex justify-content-center align-items-center`} onClick={() => setIsOpenSideBar(!isOpenSidebar)}>
                  <FaLongArrowAltRight className={`trans ${isOpenSidebar ? "" : "iconRotate"}`} style={{fontSize: "15px"}}/>
                </span>
              </div>

              <div id="sidebar-menu" className="sidebar-menu">
                <ul className="p-0">
                  <li className="mb-2"> 
                      <Link className={`d-flex ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/" ? "active" : ""}`} to={"/"}><MdOutlineDashboard className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Dashboard</span></Link>
                  </li>
                  <li className="mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/analytic" ? "active" : ""}`} to={"/analytic"}><MdOutlineEdgesensorHigh className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Analytic</span></Link>
                  </li>

                  <div className=""><hr className="w-100 simpleBorder" /></div>

                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/suppliers" ? "active" : ""}`} to={"/suppliers"}><BsTruckFrontFill className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Suppliers</span></Link>
                  </li>
                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/orders" ? "active" : ""}`} to={"/orders"}><MdOutlineEdgesensorHigh className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Orders</span></Link>
                  </li>
                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/products" ? "active" : ""}`} to={"/products"}><FaSitemap className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Products</span></Link>
                  </li>
                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/customers" ? "active" : ""}`} to={"/customers"}><FaUsers className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Customers</span></Link>
                  </li>

                  <div className=""><hr className="w-100 simpleBorder" /></div>

                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/invoices" ? "active" : ""}`} to={"/invoices"}><TbFileInvoice className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Invoices</span></Link>
                  </li>

                  <li className="d-flex justify-content-start align-items-center mb-2"> 
                      <Link className={`d-flex  ${isOpenSidebar ? "justify-content-start" : "justify-content-center"} align-items-center dashMenuItem rounded w-100 ${location.pathname === "/sales" ? "active" : ""}`} to={"/sales"}><MdOutlineSell className="dashMenuIcon" style={{fontSize: "20px"}} /> <span className={`${isOpenSidebar ? "" : "sidebarMenuText"}`}>Sales</span></Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-md-2 sidebarWrapTwo ${isOpenSidebar ? "" : "sidebarEffect"} z-1`}></div>


            <div className={`${isOpenSidebar ? "col-md-10" : "col"} contentWrapper`}>

              <DashboardHeader/>

              <Outlet/>

            </div>
          </div>
        </div>
      
      
      </>
    )
}

export default DashboardLayout;
