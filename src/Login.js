import React from "react"
import {Button} from "react-bootstrap"  
import axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={email:"",password:"",stat:0}
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.props)
      axios.post('http://13.234.55.47:5000/login',{user_name:this.state.email,password:this.state.password})
      //axios.post('http://13.234.55.47:5000/login',{user_name:"Rahul",password:"E5857B335AFDF35CA81A110BC81F38682F8A89892CC597F5398DFEF82D42B513"})
      .then(res=>{if(res.status==200){this.props.isAuthenticated()
                                    
                                    this.props.seteid(res.data.e_id)
                                    console.log(this.props.eid)
                                } 
                    else{console.log("enter valid credentials")
                        alert("enter valid credentials")}
                    
                })
        
    } 

    render(){
        if(this.props.loggedin)
            return <Redirect to="/" />
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>                        
                        <label htmlFor="Username">Username</label>
                        <input type="text" placeholder="username enter that one" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div>                        
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    <input type="submit" value="Login" />
                </form>
                <a href="/Register"> Click here to register </a>
            </div>

        )
    }

}

export default Login