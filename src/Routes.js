import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from "./App"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import Register from "./Register"
import Approve from "./Approve"
import Salary from "./Salary"
import Leave from "./Leave"
class Routes extends React.Component {

  constructor(props) {
    super(props)
    this.state = { loggedin: false, email: "", password: "" }
    console.log(this.state.eid)
    if (localStorage.hasOwnProperty('loggedin')) {
      if (localStorage.hasOwnProperty('eid')) {
        
        this.setState({eid:localStorage.getItem("eid")})
        this.setState({loggedin:true})
        console.log("eid is set",this.state.eid)
        
      }

    }

    else
      console.log("localstorage unset")
  }
  isAuthenticated = () => {
    this.setState({ loggedin: true })
    localStorage.setItem("loggedin", true)
    console.log("lsli",localStorage.getItem("loggedin"))
  }
  seteid = user_eid => {
    this.setState({ eid: user_eid })
    localStorage.setItem("eid", user_eid)
    console.log("lseid",localStorage.getItem("eid"))

  }
  check = () => {
    console.log(this.state.eid)
  }

  render() {
    console.log(this.state.loggedin, this.props)
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/" authenticated={this.state.loggedin} component={App} eid={this.state.eid} />
          <PrivateRoute exact path="/Leave" authenticated={this.state.loggedin} component={Leave} eid={this.state.eid} />

          <PrivateRoute exact path="/Salary" authenticated={this.state.loggedin} component={Salary} eid={this.state.eid} />
          <PrivateRoute exact path="/Approve" authenticated={this.state.loggedin} component={Approve} eid={this.state.eid} />
          <Route exact path="/l" render={() => <Login loggedin={this.state.loggedin} isAuthenticated={this.isAuthenticated} seteid={this.seteid} eid={this.state.eid} />} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    )
  }
}
export default Routes