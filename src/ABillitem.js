import React from "react"
import Axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"
import Card from'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class ABillitem extends React.Component{
    constructor(props){
        super(props)
        var s=props.item.status
        console.log(s)
        this.state={status:s}
    }
    render(){
        return(
            <div>
                <div style={{marginBottom:'1%'}}>
                <Card>
                <Card.Body>
                <Card.Title>{this.props.item.e_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bill ID: {this.props.item.bill_id}</Card.Subtitle>
                <Card.Img variant="top" src={"data:image/jpeg;base64,"+this.props.item.bill_image} />
                <Card.Text>
                Bill Amount: {this.props.item.bill_amount}<br/>
                Status: {this.state.status}<br/>
                </Card.Text>
                <p></p>
                     <Button variant="success" onClick={()=>{
                                 console.log("clicked")
                                 this.setState({status:"approved"})
                                 Axios.post('http://127.0.0.1:5000/process_bill',{e_id:this.props.item.e_id,bill_id:this.props.item.bill_id,bill_status:"approved"})
                                 }
                     } style={{marginRight:'2%'}}>Accept</Button>
                     <Button variant="danger" onClick={()=>{
                                 console.log("clicked")
                                 this.setState({status:"rejected"})
                                 Axios.post('http://127.0.0.1:5000/process_bill',{e_id:this.props.item.e_id,bill_id:this.props.item.bill_id,bill_status:"rejected"})
                                 }
                     }>reject</Button>
                     </Card.Body>
                     </Card>
                </div>
            </div>
        )
    }
}
export default ABillitem