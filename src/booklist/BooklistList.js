import React from 'react';
import {Col, Container, Row, Button, Alert} from 'reactstrap';
import Book from './Book'

import '../App.css';
import '../booklist/booklistlist.css'

const BookList = (props) => {

  const deleteBook = (book) => {
    fetch(`http://localhost:3000/bookworm/delete/${book.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchBooklist())
}

const copyBook = (book) => {
  fetch(`http://localhost:3000/bookworm/create`, {
      method: 'POST',
      body: JSON.stringify({books: {title: book.title, author: book.author,  finished: book.finished, tbr: book.tbr, genre: book.genre}}),
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
      })
  }).then((res) => res.json())
  .then((logBook) => {
      console.log(logBook)
      props.fetchBooklist()
      alert("book added successfully!")
  });
}



    return ( 
        <div>
           <Container id="book-grid-container">
             <Row>
          {props.library.map((book,index) => {
            return(
              <Col key={index} lg="4" sm="6" xs="12" className="grid-column">
               <div className="book-card">
                  <Book author={book.author} title={book.title} tbr={book.tbr} genre={book.genre} finished={book.finished} deleteBook={deleteBook} updateOn={props.updateOn} editUpdateBook={props.editUpdateBook} />
               
                {(book.owner === props.id) ?
                    <div className="button-row">
                      <Button color="warning" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>
                      <Button color="danger" onClick={() => {deleteBook(book)}}>Delete Book</Button></div> : <div className="copyBtn"><Button color="primary" onClick={() => copyBook(book)} >Add to my Library</Button></div>
                    }
                </div>
               
              </Col>
            )
          })}
            </Row>
          </Container>
        </div>
     );
}
 
export default BookList;