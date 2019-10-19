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
                        <li><Link to="/search">SEARCH</Link></li>
                        <li><a href="#meh" target="_blank" rel="noopener noreferrer">ABOUT</a></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default MyNavbar