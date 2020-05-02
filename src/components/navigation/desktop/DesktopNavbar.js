import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MyDesktopNavbar from './styles';



const DesktopNavbar = () => {
  return (
    <MyDesktopNavbar>
       <div className='logo'>Logo</div>
       <ul className="nav links">
         <li>
           <Link to="/" className="link">Home</Link>
         </li>
         <li>
           <Link to="/about" className="link">About</Link>
         </li>
         <li>
           <Link to="/contact" className="link">Contact</Link>
         </li>
       </ul>
    <button>Button</button>
    </MyDesktopNavbar>
  );
};

export default DesktopNavbar;