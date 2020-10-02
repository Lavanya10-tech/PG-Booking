import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class CustTable extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:4000/customers/DeleteUser/' + this.props.obj._id)
            .then((res) => {
                console.log('User successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
            window.location.reload(false);
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.pass}</td>
                <td>
                    <Button variant="light"><Link to={"/EditCust/" + this.props.obj._id}>Edit</Link></Button>
                </td>
                <td>
                    <Button size="sm" variant="danger" onClick={this.deleteUser}>Delete</Button>
                </td>                
            </tr>
        );
    }
}

export default CustTable;