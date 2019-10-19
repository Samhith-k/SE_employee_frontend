import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class Leave extends React.Component {
  state = {
    startDate: new Date(),
    endDate:new Date(),
    reason:""
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleChange2 = date => {
    this.setState({
      endDate: date
    });
  };
  reason = reason => {
    this.setState({
      reason:document.getElementById("givereason").value
    });
  };
  
  handleSubmit=()=>{
    console.log(this.state.startDate,this.state.endDate,this.state.reason)
  }
 
  render() {
    return (
        <div>
            <h1>leave apllication</h1>
        <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={this.state.startDate}
        onChange={this.handleChange}
        />
        <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={this.state.endDate}
        onChange={this.handleChange2}
        />
        <br></br>
        <textarea 
        id="givereason"
        onChange={this.reason} >
            enter reason
        </textarea>
        <button onClick={this.handleSubmit} >submit leave apllication</button>
        </div>
      
    );
  }
}
export default Leave