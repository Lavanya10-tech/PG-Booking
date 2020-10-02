import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Table, Button} from 'react-bootstrap';
import OwnersTable from './OwnersTable';
import CustTable from './CustTable';


class UserList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      owners: [],
      customers : []
    };
  }

  componentDidMount() {       
    axios.all([
      axios.get('http://localhost:4000/owners/'),
      axios.get('http://localhost:4000/customers/')
    ])
    .then(axios.spread((ownerRes, CustRes) => {
      this.setState({
        owners: ownerRes.data,
        customers: CustRes.data
      });
    }))     
    .catch((error) => {
      console.log(error);
    })
  }

  OwnerDataTable() {
    return this.state.owners.map((res, i) => {
      return <OwnersTable obj={res} key={i} />;
    });
  }

  CustDataTable() {
    return this.state.customers.map((res, i) => {
      return <CustTable obj={res} key={i} />;
    });
  }

  render() {
    return (
    <div className="table-wrapper">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <Button variant="dark"><Link to = "/">Logout</Link></Button>
        </div>
      </div>      
      <div>
        <h4> Owners List</h4>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>            
            <th>Email</th>
            <th>Phone No</th>
            <th>Password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.OwnerDataTable()}
        </tbody>
      </Table>
      <div>
        <h4> Customers List</h4>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>            
            <th>Email</th>
            <th>Phone No</th>
            <th>Password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.CustDataTable()}
        </tbody>
      </Table>
    </div>);
  }
}

export default UserList;