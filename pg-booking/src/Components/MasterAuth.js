import React, {Component} from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";
import { Link } from 'react-router-dom';

class MasterAuth extends Component{
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this)        
        this.onChangePass = this.onChangePass.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            username: '',
            pass: ''
        } 
    }
    onChangeUserName = (e) => {
        this.setState({username: e.target.value})
    }

    onChangePass = (e) => {
        this.setState({pass: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();        
        if((this.state.username === 'admin') && (this.state.pass === 'admin')){
            this.props.history.push('/MasterTable')
            window.location.reload(false)
        }
        else{
            window.alert(`Invalid Authentication`)
        }
    }

    render() {
        return (
            <div>
                <Container>
                <Link to = "/">Home</Link>
                    <Jumbotron>
                        <div>
                            <h2>Master Login</h2>
                        </div>
                        <div>
                            <form onSubmit = {this.onSubmit}>
                            <label>Username</label><br></br>
                            <input type="text" value = {this.state.username} onChange = {this.onChangeUserName}/><br></br>
                            <label>Password</label><br></br>
                            <input type="password" value = {this.state.pass} onChange = {this.onChangePass}/><br></br><br></br>
                            <div>
                                <Button variant = "dark" type="submit">Submit</Button>                        
                            </div>
                            </form>
                        </div>
                    </Jumbotron>
                </Container>
            </div>            
        );
    };
}

export default MasterAuth;