import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
       <div className="navbar">
        <div className="left">
       {/* <img src={Logo} alt="" />*/}
        </div>
        <div className="right">
            <div className="item">Home</div>
            <div className="item">About Me</div>
            <div className="item">Services</div>
            <div className="item">Contact</div>
        </div>
           

       </div>
    );
};

export default NavBar;