import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Login from './Login';

const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
            fetch('http://localhost:3000/user/register', {
            method: "POST",
            body: JSON.stringify({user: {email: email, password: password}}),
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
                    <Label id="label" htmlFor="email">Email</Label>
                    <Input id="font" onChange={(e)=> setEmail(e.target.value)} 
                    name="email"
                    placeholder="Email Required"
                    value={email}
                    pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                    title="Must be in standard email format. ex:youremail@email.com"/>
                </FormGroup>
                <FormGroup>
                    <Label id="label" htmlFor="password">Password</Label>
                    <Input id="font" onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password Required"
                    name="password" 
                    value={password}
                    type="password"
                    title="Password must contain one number, one capital letter, and be 5-15 characters in length."
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,15}"
                    />
                </FormGroup>
                <Button id="fpbutton" to="./Login" type="submit">Sign up</Button>
            </Form>
        </div>
    )
}

export default Signup;