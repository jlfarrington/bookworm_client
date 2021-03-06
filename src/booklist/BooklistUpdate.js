import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import '../App.css'


const BooklistUpdate = (props) => {
const [updateAuthor, setUpdateAuthor] = useState(props.bookToUpdate.author);
const [updateTitle, setUpdateTitle] = useState(props.bookToUpdate.title);
const [updateFinished, setUpdateFinished] = useState(props.bookToUpdate.finished);
const [updateTbr, setUpdateTbr] = useState(props.bookToUpdate.tbr);
const [updateGenre, setUpdateGenre] = useState(props.bookToUpdate.genre);


const bookUpdate = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/bookworm/update/${props.bookToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({books: {author: updateAuthor, title: updateTitle, finished: updateFinished, tbr: updateTbr, genre: updateGenre}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => {
        props.fetchBooklist();
        props.updateOff();
    })
}
const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);


    return ( 
    <div>
        <Modal isOpen={true}>

            <ModalHeader>Update</ModalHeader>
            <ModalBody>
                <Form onSubmit={bookUpdate}>
                
                    <FormGroup>
                        <Label for="author">Edit Author:</Label>
                        <Input name="author" value={updateAuthor} onChange={(e) =>setUpdateAuthor(e.target.value)}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="title">Edit Title:</Label>
                        <Input name="title" value={updateTitle} onChange={(e) =>setUpdateTitle(e.target.value)}/>
                    </FormGroup>

                                      
                    <FormGroup>
                        <Label for="finished">Edit Finished:</Label>
                        <Input type="select" name="finished" value={updateFinished} onChange={(e) =>setUpdateFinished(e.target.value)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="tbr">Edit To Be Read:</Label>
                        <Input type="select" name="tbr" value={updateTbr} onChange={(e) =>setUpdateTbr(e.target.value)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="genre">Edit Genre:</Label>
                        <Input name="genre" value={updateGenre} onChange={(e) =>setUpdateGenre(e.target.value)}/>
                    </FormGroup>

                    <Button type="submit">Update</Button> 
                 
                   
                </Form>
            </ModalBody>
        
        </Modal>
        </div>
     );
}
 
export default BooklistUpdate;