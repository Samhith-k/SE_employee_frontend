import React from 'react';
import MyNavbar from "./MyNavbar"
import Axios from 'axios';

function App(props) {
  var text = "";
  var dat =""
  if(props.eid){
  Axios.get("http://13.234.55.47:5000/get_emp_details/"+props.eid)
  .then((response) =>{ console.log(response)
        console.log("sucess")
        dat=response.data})
  }
  
    
  return (
  <div>
    <MyNavbar/>
    <h1>hello  </h1>
    {console.log("inside the app",props.eid,text,dat)  }
    
  </div>
  );
}

export default App;
