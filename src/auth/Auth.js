import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Auth = (props) => {
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    Signup
            </Col>
                <Col md="6" className="login-col">
                </Col>
            </Row>
        </Container>
    )

}
export default Auth;
