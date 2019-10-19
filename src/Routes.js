import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from "./App"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
class Routes extends React.Component{

    state={loggedin:false,email:"",password:""}

    isAuthenticated = () => {
      this.setState({loggedin: true})
    }
    render(){
      console.log(this.state.loggedin, this.props)
    return(
        <Router>
          <Switch> 
              <PrivateRoute exact path="/" authenticated={this.state.loggedin} component={App} />
              <Route exact path="/l" render={() => <Login loggedin={this.state.loggedin} isAuthenticated={this.isAuthenticated} />} /> 
          </Switch>
        </Router>
      )  
    }    
}
export default Routes
