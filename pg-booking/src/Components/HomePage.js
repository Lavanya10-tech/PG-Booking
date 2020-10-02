import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Jumbotron } from 'react-bootstrap';

const HomePage = () =>{
    return (
        <Container>
            <Jumbotron>
            <div>
                <Button variant = "light"><Link to = "/CustomerSignIn">Browse as Customer</Link></Button><br></br><br></br>
                <Button variant = "light"><Link to = "/OwnerSignIn">Post Ad as House Owner</Link></Button><br></br><br></br>
                <Button variant = "dark"><Link to ="/MasterAuth">View User List</Link></Button>
            </div>               
            </Jumbotron>
        </Container>
    );
};

export default HomePage;