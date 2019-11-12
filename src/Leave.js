import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Leave extends React.Component {
  constructor(){
    super()
    this.state = {startDate: new Date(),reason:"",reason_category:"",resp:""}
}
  handleSubmit = () => {
    console.log(this.state.reason)
    var date=this.state.startDate.toLocaleDateString("en-US")
    var datearray=[date]
    console.log(datearray)
    console.log(this.state.reason_category)
    console.log(this.props.eid)
    axios.post('http://13.234.55.47:5000/apply_leave',{"e_id":this.props.eid,"type":"medical","list_of_dates":datearray,"reason":this.state.reason,"status":"pending"})
    .then(res=>{if(res.status===200)
                {alert("Leave application submitted")}
                else{
                  alert("Enter valid details")
                }
              }
      )
    
    //console.log(resp)
  }

 
  render(){
    return (
        <div>
            <h1>leave apllication</h1>
        <DatePicker   
        selected={this.state.startDate}
        onChange={(e) => {this.setState({startDate:e})}}
        />
        <br></br>
        <textarea 
        onChange={(e) => {this.setState({reason:e.target.value})
                          console.log(this.state.reason)
                        }
                  } >
            enter reason
        </textarea>
        <br></br>
        <textarea 
        onChange={(e) => {this.setState({reason_category:e.target.value})
                          console.log(this.state.reason_category)
                        }
                  } >
            enter reason category
        </textarea>
        <button onClick={this.handleSubmit} >submit leave apllication</button>
        </div>
      
    );
  }
}
export default Leave