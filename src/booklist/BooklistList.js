import React from 'react';
import {Col, Container, Row, Button} from 'reactstrap';
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


    return ( 
        <div>
           <Container>
             <Row>
          {props.library.map((book,index) => {
            return(
              <Col key={index} lg="4" sm="6" xs="12" className="grid-column">
               <div className="book-card">
                  <Book author={book.author} title={book.title} tbr={book.tbr} genre={book.genre} finished={book.finished} deleteBook={deleteBook} updateOn={props.updateOn} editUpdateBook={props.editUpdateBook} />
               
                
                    <div className="button-row">
                      <Button className="buttonUpdate" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>
                      <Button className="buttonDelete" onClick={() => {deleteBook(book)}}>Delete Book</Button>
                    </div>
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