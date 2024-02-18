import React from 'react';
import Logo from '../../assets/logo.png';
import './NavBar.css';
const NavBar = () => {
    return (
       <div className="navbar">
        <div className="left">
        <img src={Logo} alt="" />
        </div>
        <div className="right">
            <div className="item">Home</div>
            <div className="item">About Us</div>
            <div className="item">Community</div>
            <div className="item">Pricing</div>
        </div>
           

       </div>
    );
};

export default NavBar;