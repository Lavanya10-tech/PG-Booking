import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import CustomerViewRow from '../Tables/CustomerViewRow';

class CustomerViewList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        customerView: []
    };
  }

  componentDidMount() {          
    axios.get('http://localhost:4000/ownerPosts/')
      .then((res) => {
        this.setState({
          customerView: res.data,
        });       
      }) 
      .catch((error) => {
        console.log(error);
      })
  }

  CustomerViewDataTable() {
    return this.state.customerView.map((res, i) => {
      return <CustomerViewRow obj={res} key={i} />;
    });
  }  
  render() {
    return (    
      <div className="table-wrapper">
        <div>
          <h4> Search for PG! </h4>
        </div>
        <div className="row">
          <div className="col-11"></div>          
          <div className="col-1">
            <Link to = "/CustomerSignIn"><Button variant = "secondary">Logout</Button></Link>
          </div>
        </div><br></br>
        <Table striped bordered hover>
          <thead>
            <tr>            
              <th>Hotel Name</th>
              <th>Min Days</th>
              <th>Max Days</th>
              <th>Rent/Day</th>
              <th>Image</th>
              <th>From Date</th>
              <th>To Date</th>
              <th></th>  
            </tr>
          </thead>
          <tbody>
            {this.CustomerViewDataTable()}
          </tbody>
        </Table>
      </div>);
  }
}

export default CustomerViewList;