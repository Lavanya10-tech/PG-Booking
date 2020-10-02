import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class OwnersTable extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:4000/owners/DeleteUser/' + this.props.obj._id)
            .then((res) => {
                axios.delete('http://localhost:4000/ownerPosts/DeleteManyPost/' + this.props.obj._id)
                .then((res) => {                    
                    window.location.reload(false);
                    window.alert('User successfully deleted!')
                })
                .catch((error) => {
                    console.log(error)
                })                
            }).catch((error) => {
                console.log(error)
            })            
    }    

    render() {
        return (
            <tr>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.pass}</td>
                <td>
                    <Button variant="light"><Link to={"/EditOwner/" + this.props.obj._id}>Edit</Link></Button>
                </td>
                <td>
                    <Button size="sm" variant="danger" onClick={this.deleteUser}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default OwnersTable;