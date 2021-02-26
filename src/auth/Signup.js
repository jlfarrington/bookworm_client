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
            props.updateToken(data.sessionToken, data.user)
        })} 
    return(
        <div class="fp">
            <h1 id="title">Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label id="label" htmlFor="username">Email</Label>
                    <Input id="font" onChange={(e)=> setUsername(e.target.value)} 
                    name="username"
                    placeholder="Email Required"
                    value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label id="label" htmlFor="password">Password</Label>
                    <Input id="font" onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password Required"
                    name="password" value={password}/>
                </FormGroup>
                <Button id="fpbutton" type="submit">Sign up</Button>
            </Form>
        </div>
    )
}

export default Signup;