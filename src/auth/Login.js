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
        <div class="fp">
            <Container>
            <h1 id="title">Log in</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label id="label" htmlFor="username">Email</Label>
                    <Input id="font" onChange={(e) => setUsername(e.target.value)} 
                    name="username" 
                    placeholder="Email Required"
                    value={username}/>
                </FormGroup>
                <FormGroup id="Login">
                    <Label id="label" htmlFor="password">Password</Label>
                    <Input id="font" onChange={(e) => setPassword(e.target.value)}
                    name="password" 
                    placeholder="Password Required"
                    value={password}
                    type="password"/>
                </FormGroup>
                <Button id="fpbutton" type="submit">Log in</Button>
            </Form>
            </Container>
        </div>
    )
}

export default Login;