import React, {useState} from 'react';
import {
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button,
    Container
} from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({
                user:{email: username, password: password},
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ) .then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    return(
        <div>
            <Container>
            <h1>Log in</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} 
                    name="username" 
                    placeholder="Email Required"
                    value={username}/>
                </FormGroup>
                </Form>
            </Container>
            <Container>
                <Form>
                <FormGroup id="Login">
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)}
                    name="password" 
                    placeholder="Password Required"
                    value={password}
                    type="password"/>
                </FormGroup>
                <Button type="submit">Log in</Button>
            </Form>
            </Container>
        </div>
    )
}

export default Login;