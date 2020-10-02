import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Table, Button, Container} from 'react-bootstrap';
import PostTableRow from './PostTableRow';

class PostList extends Component {
  constructor(props) {
    super(props)    
    this.state = {
        ownerPost: [],
        id: window.location.pathname.substr(11)        
    };
  }

  componentDidMount() {          
    axios.get('http://localhost:4000/ownerPosts/GetIndividual/' + this.state.id)
      .then((res) => {
        this.setState({
          ownerPost: res.data,
        });        
      }) 
      .catch((error) => {
        console.log(error);
      })      
  }  

  OwnerPostsDataTable() {
    return this.state.ownerPost.map((res, i) => {
      return <PostTableRow obj={res} key={i} />;
    });
  }  
  render() {
    return (
    <Container>
      <div className="table-wrapper">
        <div>
          <h4> Owners Posts List</h4>
        </div>
        <div className="row">
          <div className="col-2">
            <Link to = {`/AddPostForm/${this.state.id}`}><Button variant = "secondary">Post an Ad</Button></Link>
          </div>
          <div className="col-9"></div>
          <div className="col1">
            <Link to = "/OwnerSignIn"><Button variant = "secondary">Logout</Button></Link>
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.OwnerPostsDataTable()}            
          </tbody>
        </Table>
      </div>      
    </Container>);
  }
}

export default PostList;