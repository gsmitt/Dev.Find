import "./styles.css";
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import { LogedSidebarData } from "./LogedSidebarData";
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Logo } from "../Logo";
import authServices from "../../services/authServices";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => setSidebar(!sidebar);

    const accessToken = authServices.getAccessToken();

    function handleClick() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    function logout(){
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
    }

    return (
      <>
      <div className={sidebar ? "filter-on" : "filter-off"} onClick={showSidebar}>

      </div>
        <IconContext.Provider value={{ color: '#060b26' }}>
          
          <div className='navbar'>
          <Logo/>
            <Link to='#' className='menu-bars'>
              <FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars2'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {(accessToken ? LogedSidebarData : SidebarData).map((item, index) => {
                return (
                  <li onClick={handleClick} key={index} className={item.cName}>
                    <Link to={item.path} onClick={item.logout ? logout : () => {}}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
  
  export default Navbar;