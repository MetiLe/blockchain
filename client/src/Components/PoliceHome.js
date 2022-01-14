import React, { Component } from 'react';
import '../CSS/policeHome.css';
import List from './List';
import PoliceNav from './Navbar/PoliceNav'


class PoliceHome extends Component {
    render() {
        return(
        <div>
         <PoliceNav/>   
        <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of pending cases</h4>
            <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Crime ID</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Offense Code</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Description</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Created Timestamp</h6>
                        </div>
                    </div>
                </div>
                <List/>
            </div>
            </div>
        )
    }
}

export default PoliceHome;