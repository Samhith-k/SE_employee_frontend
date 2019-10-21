import React from "react"
import { Link } from 'react-router-dom';
const MyNavbar = () => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/search">Salary</Link></li>
                        <li><Link to="/search">Leave</Link></li>
                        <li><Link to="/search">referral</Link></li>
                        <li><Link to="/search">reimbursement</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default MyNavbar