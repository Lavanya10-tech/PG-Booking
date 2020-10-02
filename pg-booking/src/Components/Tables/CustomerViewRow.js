import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import {Button} from 'react-bootstrap';

class CustomerViewRow extends Component {
    constructor(props) {
        super(props);
        this.book = this.book.bind(this);          
        this.onChangeFromDate = this.onChangeFromDate.bind(this);
        this.onChangeToDate = this.onChangeToDate.bind(this);        
        this.onKeyPress = this.onKeyPress.bind(this); 

        this.state = {
            fromDate : '',
            toDate: '',           
            ToMinDate_ : this.setToday(),            
        }
    }

    setToday = () => {
        var date = new Date()
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        var toDay = `${year}-${month}-${day}`
        return toDay
    }

    setToMinDate = () => {
        var date = new Date(this.state.ToMinDate_)
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + (date.getDate() + this.props.obj.minDays)).slice(-2);
        var ToMinDate = `${year}-${month}-${day}`
        return ToMinDate
    }
    
    setToMaxDate=()=>{
        var date = new Date(`${this.setToMinDate()}`)
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + (date.getDate() + this.props.obj.maxDays - this.props.obj.minDays)).slice(-2);
        var maxDate = `${year}-${month}-${day}` 
        return maxDate 
    }

    setToDateMin =()=> {

    }

    onKeyPress (e){
        e.preventDefault()
        return false
    }

    onChangeFromDate(e) {
        this.setState({
            fromDate : e.target.value,
            ToMinDate_ : e.target.value             
        })                
    }
    onChangeToDate(e) {
        this.setState({
            toDate : e.target.value
        })             
    }   

    book() {                  
        var fDate = this.state.fromDate.substr(8)
        var tDate = this.state.toDate.substr(8)
        var nOD_ = 0
        if(tDate > fDate) {
            nOD_ = tDate - fDate
        }                
        window.alert(`Booking confirmed for ${nOD_} days`)
    }

    render() {
        return (            
            <tr>
                <td>{this.props.obj.hname}</td>
                <td>{this.props.obj.minDays}</td>
                <td>{this.props.obj.maxDays}</td>
                <td>{this.props.obj.rent}</td>
                <td>{this.props.obj.img}</td>
                <td><input type="date" onKeyPress={this.onKeyPress} value={this.state.fromDate} onChange = {this.onChangeFromDate} min={this.setToday()}></input></td>
                <td><input type="date" onKeyPress={this.onKeyPress} value={this.state.toDate} onChange= {this.onChangeToDate} min={this.setToMinDate()} max={this.setToMaxDate()}></input></td>
                <td>                    
                    <Button size="sm" variant="danger" onClick={this.book}>Book</Button>
                </td>
            </tr>
        );
    }
}

export default CustomerViewRow;