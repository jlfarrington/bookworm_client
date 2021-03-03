import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Register';
import Login from './Login';
import '../App.css';

const Start = (props) => {
    return ( 
        <Container className="start-container">
            <Row>
                <Col md="15" >
                   <Signup updateToken={props.updateToken} />
                </Col>
                
                <Col md="15" className="login-col">
                    <Login updateToken={props.updateToken} />
                </Col>
            </Row>
         
        </Container>
     );
}
 
export default Start;

