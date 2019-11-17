import React from "react"
import axios from "axios"
import Background from "./images/wallpaper.jpg"
import MyNavbar from "./MyNavbar"
import Table from 'react-bootstrap/Table'

class Salary extends React.Component{
    constructor(props){
        super(props)
        this.state={salary:0,bonus:0,bonus_status:false,salary_status:false}
        //event.preventDefault
        console.log("inside the salary page",props.eid)
        //axios.get('http://13.234.55.47:5000/display_salary/'+props.eid)
        axios.get('http://localhost:5000/display_salary/'+props.eid)
        .then(
           response=> {console.log(response.data)
           this.setState({salary:response.data.Salary})
           this.setState({bonus:response.data.bonus_amount})
           this.setState({bonus_status:response.data.bonus_status})
           this.setState({salary_status:response.data.salary_status})
        }
        );
    }
    render(){
        const salstatus = this.state.salary_status;
        let sal;
        let bon;
        if(!salstatus)
        {
            sal = <p>Not Credited</p>
        }
        else
        {
            sal = <p>Credited</p>
        }
        const bonstatus = this.state.bonus_status;
        if(!bonstatus)
        {
            bon = <p>Not given yet.</p>
        }
        else
        {
            bon = <p>Annual bonus given</p>
        }
        return(
            <div style={{backgroundImage:"url(" + Background + ")", height:"100%",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                <MyNavbar />
                <div class="put_in_center">
                <h2 style={{justifyContent:'center',display:'flex',paddingTop:'2%',paddingBottom:'2%'}}>Personal Salary Details</h2>
                <Table striped bordered hover style={{width:'80%',marginLeft:'10%'}}>
                <tbody>
                <tr>
                  <td>Salary</td>
                  <td><p>{this.state.salary}</p></td>
                </tr>
                <tr>
                  <td>Bonus</td>
                  <td><p>{this.state.bonus}</p></td>
                </tr>
                <tr>
                  <td>Salary Status</td>
                  <td>{sal}</td>
                </tr>
                <tr>
                  <td>Bonus Status</td>
                    <td>{bon}</td>
                </tr>
              </tbody>
            </Table>
            </div>
            </div>
        )
    }
}
export default Salary