import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

import CustomerSignIn from './Components/Customer/CustomerSignIn';
import CustomerSignUp from './Components/Customer/CustomerSignUp';
import EditCust from './Components/Customer/EditCust';
import CustomerView from './Components/Customer/CustomerView';

import OwnerSignIn from './Components/Owner/OwnerSignIn';
import OwnerSignUp from './Components/Owner/OwnerSignUp';
import EditOwner from './Components/Owner/EditOwner';
import AddPostForm from './Components/Owner/AddPostForm';

import Home from './Components/HomePage';
import MasterAuth from './Components/MasterAuth';

import MasterTable from './Components/Tables/MasterTable';
import PostTableRow from './Components/Tables/PostTableRow';
import PostTable from './Components/Tables/PostTable'; 
import CustTable from './Components/Tables/CustTable';
import OwnerTable from './Components/Tables/OwnersTable';
import CustomerViewRow from './Components/Tables/CustomerViewRow';
import EditPostTable from './Components/Tables/EditPostTable';

const App = () =>{
  return (
    <BrowserRouter>
      <div className="App-header">
        <h1>PG Booking</h1>
      </div><br></br>
      <div>
        <Switch>
          <Route path="/" component = {Home} exact = {true}/>
          <Route path = "/OwnerSignIn" component = {OwnerSignIn}/>
          <Route path = "/OwnerSignUp" component = {OwnerSignUp}/>
          <Route path = "/OwnerTable" component = {OwnerTable}></Route>
          <Route path = "/EditOwner" component = {EditOwner}></Route>

          <Route path = "/CustomerSignIn" component = {CustomerSignIn}/>
          <Route path = "/CustomerSignUp" component = {CustomerSignUp}/>          
          <Route path = "/EditCust" component = {EditCust}></Route>
          <Route path = "/CustTable" component = {CustTable}></Route>
          <Route path = "/CustomerView" component = {CustomerView}></Route>
          <Route path = "/CustomerViewRow" component = {CustomerViewRow}></Route>
          
          <Route path = "/MasterTable" component = {MasterTable}></Route>
          <Route path = "/MasterAuth" component = {MasterAuth}></Route>
          
          <Route path = "/AddPostForm" component = {AddPostForm}></Route>
          <Route path = "/PostTableRow" component = {PostTableRow}></Route>
          <Route path = "/PostTable" component = {PostTable}></Route>
          <Route path = "/EditPostTable" component = {EditPostTable}></Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;