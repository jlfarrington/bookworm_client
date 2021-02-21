import React from 'react';
import { Button} from 'reactstrap';
import '../App.css';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'


const BookList = (props) => {

  const deleteBook = (book) => {
    fetch(`http://localhost:3000/booklist/delete/${book.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchLibrary())
}


  const bookMapper = () => {
    return props.library.map((book, index) => {
        return(
         
            <Tr key={index}>
                <Th scope="row">{index + 1}</Th>
                <Td>{book.author}</Td>
                <Td>{book.title}</Td>
                <Td>{book.finished ? "Yes" : "No"}</Td>
                <Td>{book.Tbr ? "Yes" : "No"}</Td>
                <Td>{book.genre}</Td>               
                <Td>
                  <Button outline color="success" className="buttonUpdate" onClick={() => {props.editUpdateBook(book); props.updateOn()}}>Update Book</Button>

                    <Button outline color="secondary " className="buttonDelete" onClick={() => {deleteBook(book)}}>Delete Book</Button>
                </Td>
                </Tr>        
        )
    })
}


    return ( 
        <div>
            {/* <h3>Library</h3> */}
            <Table hover responsive style={{backgroundColor: 'white', opacity: '0.9', padding: '5px', textAlign: 'center', verticalAlign: 'middle', margin: '5px'}}>
      <Thead>
        <Tr >
          <Th></Th>
          <Th>Author</Th>
          <Th>Title</Th>
          <Th>Finished</Th>
          <Th>TBR</Th>
          <Th>Genre</Th>
        </Tr>
      </Thead>
      <Tbody>
        {bookMapper()}
      </Tbody>
    </Table>
        </div>
     );
}
 
export default BookList;