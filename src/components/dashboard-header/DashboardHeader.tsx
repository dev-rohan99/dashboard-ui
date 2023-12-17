import React from 'react';
import { RiSunFoggyFill } from "react-icons/ri";
import { HiViewGridAdd } from "react-icons/hi";
import { MdCircleNotifications, MdMessage } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import useDropdownAndModalControl from '../../hooks/useDropdownAndModalControl';
import { Link } from 'react-router-dom';


const DashboardHeader: React.FC = () => {

  const { isOpen, toggle, dropdownRef } = useDropdownAndModalControl();
  const { isOpen: isOpenSearch, toggle: searchToggle, dropdownRef: searchDropdownRef } = useDropdownAndModalControl();
  const { isOpen: isOpenTheme, toggle: themeToggle, dropdownRef: themeDropdownRef } = useDropdownAndModalControl();

  return (
    <>
    
    
      <div className="container-fluid d-flex justify-content-end align-items-center py-3 shadow-sm bg-white rounded position-sticky top-0 header z-3">
        <ul className="p-0 listWrap d-flex justify-content-end align-items-center gap-2 mb-0">
          <li ref={searchDropdownRef} className="p-1 px-2 rounded position-relative">
            <a onClick={searchToggle} href="/">
              <FaSearch className="headerMenuItem" style={{fontSize:"17px"}}/>
            </a>

            {isOpenSearch && <div className="dropdownPropile2 rounded p-3 shadow">
              <form>
                <input type="text" className="form-control" placeholder="Search . . ." />
              </form>
            </div>}
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
          <li ref={themeDropdownRef} className="p-1 px-2 rounded position-relative">
            <a onClick={themeToggle} href="/">
              <RiSunFoggyFill className="headerMenuItem" style={{fontSize:"20px"}}/>
            </a>

            {isOpenTheme && <div className="dropdownTheme rounded p-3 shadow">
              <ul className="p-0 m-0 list-unstyled">
                <li><a href="/" className="profileListMenu rounded p-1 px-3 mb-1">Light</a></li>
                <li><a href="/" className="profileListMenu rounded p-1 px-3 mb-1">Dark</a></li>
                <li><a href="/" className="profileListMenu rounded p-1 px-3 mb-1">System</a></li>
              </ul>
            </div>}
          </li>

          <li ref={dropdownRef} className="px-2 position-relative">
            <a onClick={toggle} href="" className="">
              <img className="profile rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
            </a>

            {isOpen && <div className="dropdownPropile rounded p-3 shadow">
              <div className="d-flex justify-content-start align-items-center mb-3">
                <Link to="/profile" className="">
                  <img className="profileTwo rounded" src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" alt="" />
                </Link>
                <div style={{marginLeft:"9px"}} className="">
                  <h6 className="m-0">Rohan Mostofa</h6>
                  <span>example@gmail.com</span>
                </div>
              </div>

              <ul className="p-0 m-0 list-unstyled">
                <li className="pt-2 mt-2 profileListBorder"><Link to="/profile" className="profileListMenu rounded p-2 px-3 mb-1">My Profile</Link></li>
                <li><Link to="/coming-soon" className="profileListMenu rounded p-2 px-3 mb-1">My Blogs</Link></li>
                <li><Link to="/coming-soon" className="profileListMenu rounded p-2 px-3 mb-1">My Subscription</Link></li>
                <li><Link to="/coming-soon" className="profileListMenu rounded p-2 px-3 mb-1">My Statements</Link></li>

                <li className="pt-2 mt-2 profileListBorder"><a href="/" className="profileListMenu rounded p-2 px-3 mb-1">Language</a></li>
                <li><Link to="/coming-soon" className="profileListMenu rounded p-2 px-3 mb-1">Account Settings</Link></li>
                <li><a href="/" className="profileListMenu rounded p-2 px-3 mb-1">Sign Out</a></li>
              </ul>
            </div>}
          </li>
        </ul>
      </div>
    
    
    </>
  )
}

export default DashboardHeader;
