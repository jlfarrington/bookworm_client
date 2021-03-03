import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import '../App.css';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password} }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((user) => {
            props.updateToken(user.sessionToken)
        })
    }

    return (
        <div>
            <h3 style={{padding: '10px', marginTop: '10px'}}>Login</h3>
            <Form onSubmit={handleSubmit} className="formLogin">
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" value={password} />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        </div>
    )
}

export default Login;