import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditOwner extends Component {

  constructor(props) {
    super(props)

    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserPass = this.onChangeUserPass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      email: '',
      phone: '',
      pass: ''
    }
  }

  componentDidMount() {
    var id = this.props.location.pathname.substr(11)
    axios.get('http://localhost:4000/owners/EditUser/' + id)
      .then((res) => {
        this.setState({
          email: res.data.email,
          phone: res.data.phone,
          pass: res.data.pass
        });        
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeUserEmail (e) {
    this.setState({ email: e.target.value })
  }

  onChangeUserPhone (e) {
    this.setState({ phone: e.target.value })
  }

  onChangeUserPass (e) {
    this.setState({ pass: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    
    const UserObj = {
        name: this.state.email,
        phone: this.state.phone,
        pass: this.state.pass
    }

    var id = this.props.location.pathname.substr(11)
    axios.put('http://localhost:4000/owners/UpdateUser/' + id, UserObj)
      .then((res) => {
        console.log(res.data)
        console.log('User successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/MasterTable')
    window.location.reload(false)
  }


  render() {
    return (
    <div className="form-wrapper">      
        <form onSubmit = {this.onSubmit}>
          <div>
            <label>Email</label><br></br>
            <input type="text" value={this.state.email} onChange={this.onChangeUserEmail}/><br></br>
            <label>Phone Number</label><br></br>
            <input type="text" value={this.state.phone} onChange={this.onChangeUserPhone}/><br></br>
            <label>Password</label><br></br>
            <input type="password" value={this.state.pass} onChange={this.onChangeUserPass}/><br></br>
          </div>                    
          <div>
            <Button className="btn btn-primary" type = "submit">Submit</Button>
          </div>
      </form>
    </div>);
  }
}

export default EditOwner;