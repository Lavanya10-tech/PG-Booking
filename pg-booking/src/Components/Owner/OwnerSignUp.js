import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import axios from 'axios';

class OwnerSignUp extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePhone = this.onChangePhone.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            email: '',
            phone: '',
            pass: ''
        } 
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangePhone = (e) => {
        this.setState({phone: e.target.value})
    }

    onChangePass = (e) => {
        this.setState({pass: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const UserObj = {
            email: this.state.email,
            phone: this.state.phone,
            pass: this.state.pass
        }
        if(UserObj.email === '' || UserObj.pass === ''){
            window.alert('Enter mailId and pass')
        }
        else{
            axios.get('http://localhost:4000/owners/ValUserSignUp/'+ UserObj.email + '/' + UserObj.phone)
            .then((res) =>{
                if(res.data === 'new'){
                    axios.post('http://localhost:4000/owners/CreateUser', UserObj
                    ).then((res) => {                        
                        window.alert(`Registration success`)
                    });
                }
                else{ 
                    window.alert("User Already Exist")
                }
            })            
            this.setState({email: '', phone: '', pass: ''})
        }                
    }

    render() {
        return (
            <div>
                <Container>
                <Link to = "/">Home</Link>
                    <Jumbotron>                                                    
                        <div>
                            <h2>Owner Sign Up</h2>
                        </div>
                        <div>
                            <form onSubmit = {this.onSubmit}>
                                <div>
                                    <label>Email</label><br></br>
                                    <input type="text" value={this.state.email} onChange={this.onChangeEmail}/><br></br>
                                    <label>Phone Number</label><br></br>
                                    <input type="text" value={this.state.phone} onChange={this.onChangePhone}/><br></br>
                                    <label>Password</label><br></br>
                                    <input type="password" value={this.state.pass} onChange={this.onChangePass}/><br></br><br></br>
                                </div>                    
                                <div>
                                    <Button variant="secondary" type = "submit">Submit</Button>{' '}
                                    <Button variant ="light"><Link to="/OwnerSignIn">Sign In</Link></Button>
                                </div>
                            </form>
                        </div>   
                    </Jumbotron>         
                </Container>
            </div>
            );
        };
    }
    
export default OwnerSignUp;