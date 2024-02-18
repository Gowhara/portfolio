import React from 'react';
import './MainSection.css';
import profile from '../../images/profile.png';
const Mainsection = () => {
    return (
        <div className="mainSection">
            <div className="left">
                <div className="texts">
                    <div className="header">
                       <span>Hello,I'm Gowhara Eid</span> 
                    </div>
                    <div className="helperText">
                      <span> Web Developer Using React </span> 
                      <span> Mobile Developer Using Flutter</span>
                      
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={profile} alt="" />
            </div>
        </div>
    );
};

export default Mainsection;