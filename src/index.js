import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import Login from './Login';
import Routes from "./Routes"
import Leave from "./Leave"
import Approve from "./Approve"
import Cab from "./Cab"
import Bill from "./Bill"
import view_bills from "./view_bills"
import approve_bill from "./approve_bill"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<Routes/>, document.getElementById('root'));
