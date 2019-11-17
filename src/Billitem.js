import React from "react"
import Axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"
import Card from'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

class Billitem extends React.Component{
    constructor(props){
        super(props)
        var s=props.item.status
        console.log(s)
        this.state={status:s}
    }
    render(){
        return(
            <div>
                <div style = {{marginBottom:'1%'}}>
                <Card>
                <Card.Body>
                <Card.Title > {this.props.item.e_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Bill ID: {this.props.item.bill_id}</Card.Subtitle>
                <Card.Img variant="top" src={"data:image/jpeg;base64,"+this.props.item.bill_image} />
                <Card.Text>
                Bill Amount: {this.props.item.bill_amount} <br/>
                Status: {this.state.status} <br/>
                </Card.Text>
                </Card.Body>
                </Card>
                     <p></p>
                </div>
            </div>
        )
    }
}
export default Billitem