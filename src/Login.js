import React from "react"
import {Button} from "react-bootstrap"  
import axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"
import Background from "./images/ems.jpg"



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={email:"",password:"",stat:0,cache:false}
        
            if (localStorage.getItem('eid')===null) {
              console.log("cache is empty")
              
            }
            else{
                this.props.isAuthenticated()
                this.props.seteid(localStorage.getItem("eid"))
                console.log("inside login eid is ",localStorage.getItem("eid"))
                this.setState({cache:true})

            }
      
          
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.props)
      //axios.post('http://13.234.55.47:5000/login',{user_name:this.state.email,password:this.state.password})
      //axios.post('http://localhost:5000/login',{user_name:this.state.email,password:this.state.password})
      axios.post('http://13.234.55.47:5000/login',{user_name:"Rahul",password:"E5857B335AFDF35CA81A110BC81F38682F8A89892CC597F5398DFEF82D42B513"})
      .then(res=>{if(res.status==200){this.props.isAuthenticated()
                                    this.setState({cache:true})
                                    this.props.seteid(res.data.e_id)
                                    console.log(this.props.eid)
                                } 
                    else{console.log("enter valid credentials")
                        alert("enter valid credentials")}
                    
                })
        
    } 

    render(){
        if(this.props.loggedin&&this.state.cache)
            return <Redirect to="/" />
        return(
            <body style={{backgroundImage:"url(" + Background + ")", height:"100%"}} >
            <div class="formblock" style={{paddingLeft:'10%',paddingTop:'15%',paddingRight:'70%'}}>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tr>                        
                            <td style={{paddingBottom:'2%',paddingRight:'2%'}}><label htmlFor="Username">Username</label></td>
                            <td style={{paddingBottom:'2%',paddingRight:'2%'}}><input type="text" placeholder="Enter Username" onChange={(e) => this.setState({email: e.target.value})}/></td>
                        </tr>
                        <tr>                        
                            <td style={{paddingBottom:'2%',paddingRight:'2%'}}><label htmlFor="password">Password</label></td>
                            <td style={{paddingBottom:'2%',paddingRight:'2%'}}><input type="password" placeholder="Enter Password" onChange={(e) => this.setState({password: e.target.value})}/></td>
                        </tr>
                    </table>
                    <input type="submit" value="Login" />
                </form>
                
            </div>
            </body>
        )
    }

}

export default Login