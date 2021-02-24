import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
            fetch('http://localhost:3000/user/register', {
            method: "POST",
            body: JSON.stringify({user: {email: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })} 
    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e)=> setUsername(e.target.value)} 
                    name="username"
                    placeholder="Email Required"
                    value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password Required"
                    name="password" value={password}/>
                </FormGroup>
                <Button type="submit">Sign up</Button>
            </Form>
        </div>
    )
}

export default Signup;