import React from 'react';
import MyNavbar from "./MyNavbar"
import axios from "axios"
import Leaveitem from "./Leaveitem"


class Approve extends React.Component {
    constructor(props){
        super(props)
        this.state={items:[]}
        axios.get("http://13.234.55.47:5000/get_leave_applications/2019DEV002")
        .then(res=>{
                        const values=res.data
                        console.log("values are",values)
                        this.setState({items:values})
                    }
                )
        

    }
    handleChange(eid,resp){

    }
    render(){
        
        console.log("items are",this.state.items)
        const approveitems=this.state.items.map(item=><Leaveitem key={item.eid} item={item} handleChange={this.handleChange} />)
        return (
        <div>
            <MyNavbar/>
            <h1>put approve stuff</h1>
            {console.log("inside the approve",this.props.eid)  }
            {approveitems}

            
        </div>
        );
    }
}

export default Approve;
