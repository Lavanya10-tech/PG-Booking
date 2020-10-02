import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Jumbotron } from 'react-bootstrap';

class OwnerSignIn extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {            
            email: '',            
            pass: ''
        } 
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangePass = (e) => {
        this.setState({pass: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        const UserObj = {
            email: this.state.email,
            pass: this.state.pass
        }

        if(UserObj.email === '' || UserObj.pass === ''){
            window.alert('Enter mail Id and pass')
        }
        else{
            axios.get('http://localhost:4000/owners/ValUser/' + UserObj.email + '/' + UserObj.pass)
            .then((res) => {
                if(res.data === "new"){
                    window.alert('Incorrect Email and password not found')
                }
                else{
                    this.props.history.push('/PostTable/' + res.data._id)
                }                                                
            }).catch((error) => {
                window.alert('Something Went wrong')                
                console.log(error);
            });
            this.setState({email: '', pass: ''}) 
        }               
    }

    render() {
        return (
            <Container>
            <Link to = "/">Home</Link>
            <Jumbotron>
                <div>
                    <h2>Owner Login</h2>
                </div>
                <div>
                    <form onSubmit = {this.onSubmit}>
                    <label>Email</label><br></br>
                    <input type="text" value={this.state.email} onChange={this.onChangeEmail}/><br></br>
                    <label>Password</label><br></br>
                    <input type="password" value={this.state.pass} onChange={this.onChangePass}/><br></br><br></br>
                    <div>
                        <Button variant = "dark" type="submit">Submit</Button>{' '}
                        <Button variant = "light"><Link to="/OwnerSignUp">Sign up</Link></Button>
                    </div>
                    </form>
                </div>                
            </Jumbotron>
            </Container>
        );
    };
};

export default OwnerSignIn;