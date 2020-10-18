import React from 'react';
import './Header.scss';
import Logo from '../../logo.svg';
import { Link } from 'react-router-dom';


const Header = () => {
  return <header className="header-container">
 <img src={Logo} alt="logo" />
 <div className="space-left">
   <Link className="nav-link" to={"/"}>Home</Link>
  <span className="nav-link">|</span>
   <Link className="nav-link" to={"/favorites"}>Favorites</Link>
 </div>
  </header>;
};

export default Header;

