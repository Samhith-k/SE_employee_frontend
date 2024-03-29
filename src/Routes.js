import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import Register from "./Register"
import Approve from "./Approve"
import Salary from "./Salary"
import Leave from "./Leave"
import Cab from "./Cab"
import Bill from "./Bill"
import view_bills from "./view_bills"
import approve_bill from "./approve_bill"
import Refer from "./Refer"
class Routes extends React.Component{

    constructor(props){
        super(props)
        this.state={loggedin:false,email:"",password:""}
        console.log(this.state.eid)
    }
    isAuthenticated = () => {
      this.setState({loggedin: true})
    }
    seteid=user_eid=>{
      this.setState({eid:user_eid})

    }
    check=()=>{
      console.log(this.state.eid)
    }
    
    render(){
      console.log(this.state.loggedin, this.props)
    return(
        <Router>
          <Switch> 
              <PrivateRoute exact path="/" authenticated={this.state.loggedin} component={App} eid={this.state.eid} />
              <PrivateRoute exact path="/Leave" authenticated={this.state.loggedin} component={Leave} eid={this.state.eid} />

              <PrivateRoute exact path="/Salary" authenticated={this.state.loggedin} component={Salary} eid={this.state.eid} />
              <PrivateRoute exact path="/Approve" authenticated={this.state.loggedin} component={Approve} eid={this.state.eid} />
              <PrivateRoute exact path="/Cab" authenticated={this.state.loggedin} component={Cab} eid={this.state.eid} />
              <PrivateRoute exact path="/Bill" authenticated={this.state.loggedin} component={Bill} eid={this.state.eid} />
              <PrivateRoute exact path="/Register" authenticated={this.state.loggedin} component={Register} eid={this.state.eid} />
              <PrivateRoute exact path="/approve_bill" authenticated={this.state.loggedin} component={approve_bill} eid={this.state.eid} />
              <PrivateRoute exact path="/Refer" authenticated={this.state.loggedin} component={Refer} eid={this.state.eid} />
              <Route exact path="/l" render={() => <Login loggedin={this.state.loggedin} isAuthenticated={this.isAuthenticated} seteid={this.seteid} eid={this.state.eid} />} /> 
              
          </Switch>
        </Router>
      )  
    }    
}
export default Routes