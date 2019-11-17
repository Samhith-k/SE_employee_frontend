import React from 'react';
import MyNavbar from "./MyNavbar"
import Axios from 'axios';
import Background from "./images/wallpaper.jpg"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {user_name:'',e_contact:'',e_email:'',dept_id:'',e_type:''}
    //Axios.get("http://13.234.55.47:5000/get_emp_details/"+props.eid)
    Axios.get("http://localhost:5000/get_emp_details/"+this.props.eid)
    .then((response) =>{ console.log(response)
        console.log("sucess")
        this.setState({user_name:response.data.user_name})
        this.setState({e_contact:response.data.e_contact}) 
        this.setState({e_email:response.data.e_email}) 
        this.setState({dept_id:response.data.dept_id}) 
        this.setState({e_type:response.data.e_type})   
      })
  }
  
  render(){
  return (
  <div style={{backgroundImage:"url(" + Background + ")", height:"100%",backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
    <MyNavbar/>
    <div class="put_in_center">
  <h2 style={{justifyContent:'center',display:'flex',paddingTop:'2%',paddingBottom:'2%'}}>Hi, {this.state.user_name}</h2>
      
    </div>
  </div>
  );
}
}

export default App;
