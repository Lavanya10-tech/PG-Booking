import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Jumbotron } from 'react-bootstrap';
import axios from 'axios';

class AddPostForm extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeHname = this.onChangeHname.bind(this)
        this.onChangeMinDays = this.onChangeMinDays.bind(this)
        this.onChangeMaxDays = this.onChangeMaxDays.bind(this)
        this.onChangeRent = this.onChangeRent.bind(this)
        this.onChangeImg = this.onChangeImg.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            id: this.props.location.pathname.substr(13),
            hname: '',
            minDays: '',
            maxDays: '',
            rent: '',
            img: ''
        } 
    }

    onChangeHname = (e) => {
        this.setState({hname: e.target.value})        
    }

    onChangeMinDays = (e) => {
        this.setState({minDays: e.target.value})
    }

    onChangeMaxDays = (e) => {
        this.setState({maxDays: e.target.value})
    }

    onChangeRent = (e) => {
        this.setState({rent: e.target.value})
    }

    onChangeImg = (e) => {
        this.setState({img: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const AdFormObj = {
            id : this.state.id,
            hname: this.state.hname,
            minDays: this.state.minDays,
            maxDays: this.state.maxDays,
            rent: this.state.rent,
            img: this.state.img
        }        

        axios.post('http://localhost:4000/ownerPosts/CreatePost', AdFormObj)
        .then(res =>{ 
            window.alert('post created successfully')
        })                
        this.setState({hname: '', minDays: '', maxDays: '', rent: '', img: ''})
        this.props.history.push(`/PostTable/${this.state.id}`);
        window.location.reload(false)
    }

    render() {
        return (
            <div>
                <Container>
                <Link to = "/PostTable">View Your Posts</Link>
                    <Jumbotron>                                                    
                        <div>
                            <h2>Ad Post Form</h2>
                        </div>
                        <div>
                            <form onSubmit = {this.onSubmit}>
                                <div>
                                    <label>Hotel name</label><br></br>
                                    <input type="text" value={this.state.hname} onChange={this.onChangeHname}/><br></br>
                                    <label>Minimum Days</label><br></br>
                                    <input type="number" value={this.state.minDays} onChange={this.onChangeMinDays}/><br></br>
                                    <label>Maximum Days</label><br></br>
                                    <input type="number" value={this.state.maxDays} onChange={this.onChangeMaxDays}/><br></br>
                                    <label>Rent/Day</label><br></br>
                                    <input type="number" value={this.state.rent} onChange={this.onChangeRent}/><br></br>
                                    <label>Images</label><br></br>
                                    <input type="file" value={this.state.img} onChange={this.onChangeImg}/><br></br><br></br>
                                </div>                    
                                <div>
                                    <Button variant="secondary" type = "submit">Post</Button>                                    
                                </div>
                            </form>
                        </div>   
                    </Jumbotron>         
                </Container>
            </div>
            );
        };
    }
    
export default AddPostForm;