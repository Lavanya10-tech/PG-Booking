import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class EditPostTable extends Component {

  constructor(props) {
    super(props)

    this.onChangeHname = this.onChangeHname.bind(this)
    this.onChangeMinDays = this.onChangeMinDays.bind(this)
    this.onChangeMaxDays = this.onChangeMaxDays.bind(this)
    this.onChangeRent = this.onChangeRent.bind(this)
    this.onChangeImg = this.onChangeImg.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    // State
    this.state = {
        hname: '',
        minDays: '',
        maxDays: '',
        rent: '',
        img: ''
    } 
}

componentDidMount() {
var id = this.props.location.pathname.substr(15)
axios.get('http://localhost:4000/ownerPosts/EditPost/' + id)
    .then((res) => {
        this.setState({        
            hname: res.data.hname,
            minDays: res.data.minDays,
            maxDays: res.data.maxDays,
            rent: res.data.rent,
            img: res.data.img
        });        
    })
    .catch((error) => {
      console.log(error);
    })
}

onChangeHname (e) {
    this.setState({ hname: e.target.value })
}

onChangeMinDays (e) {
    this.setState({ minDays: e.target.value })
}

onChangeMaxDays (e) {
    this.setState({ maxDays: e.target.value })
}

onChangeRent (e) {
    this.setState({ rent: e.target.value })
}

onChangeImg (e) {
  // e.preventDefault()
    this.setState({ img: e.target.value })
}

  onSubmit(e) {
    e.preventDefault()
    
    const AdFormObj = {            
        hname: this.state.hname,
        minDays: this.state.minDays,
        maxDays: this.state.maxDays,
        rent: this.state.rent,
        img: this.state.img
    }

    var id = this.props.location.pathname.substr(15)
    axios.put('http://localhost:4000/ownerPosts/UpdatePost/' + id, AdFormObj)
      .then((res) => {        
        console.log('Post successfully updated')
      }).catch((error) => {
          console.log(error)
      })

    // Redirect to User List 
    this.props.history.push('/PostTable')
    window.location.reload(false)
  }


  render() {
    return (
    <div className="form-wrapper">      
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
                <input type="file" name={this.state.img} onChange={this.onChangeImg}/>
                {/* <input type ="text"  onChange={this.onChangeImg}></input> */}
                <br></br><br></br>
            </div>                   
            <div>
                <Button className="btn btn-primary" type = "submit">Submit</Button>
            </div>
      </form>
    </div>);
  }
}

export default EditPostTable;