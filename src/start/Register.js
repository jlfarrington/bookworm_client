import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
 

const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/register`, {
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
       <div style={{padding: '15px', margin: '25px'}}> <h3>“Open a book to a new world” 
            <br />– Anonymous</h3>
        </div> 

        <h5 style={{padding: '15px', margin: '15px'}}>Ready to create an account?
            <br />
             Register below.</h5>

       <Button onClick={toggle} style={{backgroundColor: 'grey'}} >register for an account</Button>
       <Modal isOpen={modal} toggle={toggle} className="signUp" external={externalCloseBtn}>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" type="email" required value={email} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" type="password" minLength="5" value={password} />
                </FormGroup>
                <Button type="submit">Register</Button>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Not Today</Button>
        </ModalFooter>
      </Modal>

        </div>
    )
}

export default Register;
