import React from 'react';
import { RiSunFoggyFill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { MdCircleNotifications, MdMessage } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';


const DashboardHeader: React.FC = () => {



  return (
    <>
    
    
      <div className="container-fluid d-flex justify-content-end align-items-center py-3 shadow-sm bg-white rounded position-sticky top-0 header z-3">
        <ul className="p-0 listWrap d-flex justify-content-end align-items-center gap-2 mb-0">
          <li className="p-1 px-2 rounded">
            <a href="">
              <FaSearch className="headerMenuItem" style={{fontSize:"17px"}}/>
            </a>
          </li>
          <li className="p-1 px-2 rounded">
            <a href="">
              <MdCircleNotifications className="headerMenuItem" style={{fontSize:"20px"}}/>
            </a>
          </li>
          <li className="p-1 px-2 rounded">
            <a href="">
              <MdMessage className="headerMenuItem" style={{fontSize:"20px"}}/>
            </a>
          </li>
          <li className="p-1 px-2 rounded">
            <a href="">
              <HiViewGridAdd className="headerMenuItem" style={{fontSize:"20px"}}/>
            </a>
          </li>
          <li className="p-1 px-2 rounded">
            <a href="">
              <RiSunFoggyFill className="headerMenuItem" style={{fontSize:"20px"}}/>
            </a>
          </li>
          <li className="px-2">
            <a href="/" className="">
              <img className="profile rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    
    
    </>
  )
}

export default DashboardHeader;
