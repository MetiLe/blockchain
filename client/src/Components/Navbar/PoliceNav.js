import React, {Component} from 'react';
class PoliceNav extends Component{
    render()
    {

        return (
        <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
                <b><a href="/" className="brand-logo">Criminal Record</a></b>
                <ul className = "right">
                    <li active><a href = "/police">Home</a></li>
                    <li><a href = "/newfir">New FIR</a></li>
                    <li><a href = "/">Log out</a></li>
                </ul>
            </div>
        </nav>
    )
    }
}
export default PoliceNav;