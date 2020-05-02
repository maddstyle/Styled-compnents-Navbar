import React, { Component } from 'react';
import DesktopNavbar from './desktop/DesktopNavbar';
import MobileNavbar from './mobileNav/MobileNavbar';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <DesktopNavbar />      
        <MobileNavbar />
      </div>
    )
  }
}
