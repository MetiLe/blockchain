import React from 'react';
import {Link} from 'react-router-dom'

const ViewCaseNav = (props) => 
{
   
    return (
       
        <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
                <b><a href="/" className="brand-logo">Criminal record</a></b>
                <ul className = "right">
                <li><a href="/forensicDetail">FIR Details</a></li>
                <li> <a href=""> Forensic Reports</a></li>
                <li><a href=""> Other Reports</a></li>
                <li> <a href="">Crime Scene Photographs</a></li>
                </ul>
                </div> 
        </nav>
        
    )
    
}


export default ViewCaseNav;