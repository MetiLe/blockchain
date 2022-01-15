import React, { Component } from 'react'
import ForensicDetail from './ForensicDetail.js'
import GenericNavbar from './Navbar/GenericNavbar.js';

class ForensicDetailHome extends Component 
{
    render(){
       
        return(
            <div>
                <GenericNavbar/>
                <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>Pending Forensic Reports</h4>
                <div className = "container homeList center">
                <div className="card blue darken-3 headers">
                    <div className="row ">
                        <div className="col s3 white-text  ">
                            <h6>Crime ID</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>exhibit code</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Description</h6>
                        </div>
                        <div className="col s3 white-text ">
                            <h6>Created Timestamp</h6>
                        </div>
                    </div>
                </div>
                <ForensicDetail/>
            </div>
            </div>
        )
    }
}

export default ForensicDetailHome;