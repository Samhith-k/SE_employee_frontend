import React from "react"
import axios from "axios"
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={email:"",password:"",stat:0}
        console.log("register page")
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://13.234.55.47:5000/register',{user_name:"a",password:"a"})
        .then(console.log("registered"))                             
      } 
    render(){
        return(
            <div>
                <p>Register page</p>
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
            </div>
        )
        }
}
export default Register;