import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import myNavbar from "./MyNavbar"

// put drop down for method and change request

class Leave extends React.Component {
  constructor(props) {
    super(props)
    this.state = { startDate: new Date(), endDate: new Date(), reason: "", reason_category: "", resp: "", casual: "", earned: "", medical: "" }
    axios.get('http://13.234.55.47:5000/get_leave_data/' + props.eid)
      .then(res => {
        console.log(res.data)
        this.setState({ casual: res.data.casual })
        this.setState({ earned: res.data.earned })
        this.setState({ medical: res.data.medical })
        //console.log(this.state)
      })
  }
  
  



  handleSubmit = () => {
    //console.log(this.state.reason)
    var startDate = this.state.startDate.toLocaleDateString("en-US")
    var endDate = this.state.endDate.toLocaleDateString("en-US")
    var getDateArray = function(start, end) {
      var arr = new Array();
      var dt = new Date(start);
      var et= new Date(end)
      console.log("start date is :",dt)
      while (dt <= et) {
          var a=new Date(dt)
          var b=a.toLocaleDateString("en-US")
          arr.push(b);
          dt.setDate(dt.getDate() + 1);
      }
      return arr;
  }
  
  var dateArr = getDateArray(startDate, endDate);
  console.log("list of dates are",dateArr)



    var datearray = [startDate]
    console.log(datearray)
    //console.log(this.state.reason_category)
    //console.log(this.props.eid)
    axios.post('http://13.234.55.47:5000/apply_leave', { "e_id": this.props.eid, "type": "medical", "list_of_dates": dateArr, "reason": this.state.reason, "status": "pending" })
      .then(res => {
        if (res.status === 200) { alert("Leave application submitted") }
        else {
          alert("Enter valid details")
        }
      }
      )
  }


  render() {
    return (
      <div>
        <myNavbar></myNavbar>
        <h1>Leaves Left</h1>
        <p>
          casual:{this.state.casual}
          medical:{this.state.medical}
          earned:{this.state.earned}
        </p>

        <h1>leave apllication</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={(e) => { this.setState({ startDate: e }) }}
        />
        <br></br>
        <DatePicker
          selected={this.state.endDate}
          onChange={(e) => { this.setState({ endDate: e }) }}
        />
        <br></br>
        <textarea
          onChange={(e) => {
            this.setState({ reason: e.target.value })
            console.log(this.state.reason)
          }
          } >
          enter reason
        </textarea>
        <br></br>
        <textarea
          onChange={(e) => {
            this.setState({ reason_category: e.target.value })
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