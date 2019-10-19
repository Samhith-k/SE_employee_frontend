import React from "react"
import {Button} from "react-bootstrap"  
import axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={email:"",password:""}
    }

    handleSubmit = (e) => {
      e.preventDefault()
      fetch('13.234.55.47:5000/login', {
          method: 'POST',
          body:{"user_name":this.state.email,"password":this.state.password}

      })
      .then(response => response.json())
      .then(data => {console.log(data)} )
      this.props.isAuthenticated()
    } 

    render(){
        if(this.props.loggedin)
            return <Redirect to="/" />
        return(
            <div>
                <MyNavbar/>
                <form onSubmit={this.handleSubmit}>
                    <div>                        
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="email enter that one" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div>                        
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>

        )
    }

}

export default Login