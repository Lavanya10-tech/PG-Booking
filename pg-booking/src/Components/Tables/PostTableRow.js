import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';

class PostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser() {
        axios.delete('http://localhost:4000/ownerPosts/DeletePost/' + this.props.obj._id)
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
                <td>{this.props.obj.hname}</td>
                <td>{this.props.obj.minDays}</td>
                <td>{this.props.obj.maxDays}</td>
                <td>{this.props.obj.rent}</td>
                <td>{this.props.obj.img}</td>
                <td>
                    <Link to={"/EditPostTable/" + this.props.obj._id}>Edit</Link>{' '}                    
                </td>
                <td>
                    <Button size="sm" variant="danger" onClick={this.deleteUser}>Delete</Button>
                </td>
            </tr>
        );
    }
}

export default PostTableRow;