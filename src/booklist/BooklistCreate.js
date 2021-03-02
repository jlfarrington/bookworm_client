import React, {useState, Fragment} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import '../App.css'

const BooklistCreate
 = (props) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [finished, setFinished] = useState(true);   
    const [tbr, setTbr] = useState(false);
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/bookworm/create`, {
            method: 'POST',
            body: JSON.stringify({books: {title: title, author: author,  finished: finished, tbr: tbr, genre: genre}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logBook) => {
            console.log(logBook)
            setAuthor('');
            setTitle('');
            setFinished(true);
            setTbr(false);
            setGenre('');
            props.fetchBooklist()
            props.toggle('1');
        })
    }

    return ( 
       
    <Fragment>
        <h3>Update your Booklist</h3>
        <Form onSubmit={handleSubmit}>

            <FormGroup>
                <Label for='title'>Title</Label>
                <Input name="title" value={title} onChange={(e) => setTitle(e.target.value)}></Input>
            </FormGroup>
      
            <FormGroup>
                <Label for="author">Author</Label>
                <Input name="author" value={author} onChange={(e) => setAuthor(e.target.value)}></Input>
            </FormGroup>
          
            <FormGroup>
                <Label for="finished">Finished</Label>
                <Input type="select" name="finished" value={finished} onChange={(e) => setFinished(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="tbr"> To Be Read List</Label>
                <Input type="select" name="tbr" value={tbr} onChange={(e) => setTbr(e.target.value)}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="genre"> Genre</Label>
                <Input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}></Input>
            </FormGroup>

            <Button type="submit" className="buttonSubmitCreate" >Submit</Button>

            <Button outline color="secondary" type="cancel" className="buttonCancelUpdate"onClick={ () => props.toggle('1')}>Cancel</Button>
            
        </Form>
    </Fragment>
     );
}
 
export default BooklistCreate;