
import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, TabContent, TabPane, Nav,NavItem, NavLink, Card, CardTitle, CardText} from 'reactstrap';
import BooklistList from './BoolistList';
import BooklistUpdate from './BooklistUpdate';
import classnames from 'classnames';
import '../App.css';
import BooklistCreate from './BooklistCreate';


const BooklistHome = (props) => {

const [library, setBooklist] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [bookToUpdate, setBookToUpdate] = useState({});
const [fetchUrl, setFetchUrl] = useState(`http://localhost:3000/booklist/finished`);

const [activeTab, setActiveTab] = useState('1');
const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

useEffect(() => {
    fetchBooklist () 
}, [fetchUrl]);

const fetchBooklist = () => {
    fetch(fetchUrl, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then( (res) => res.json())
    .then((logBook) => {
        setBooklist(logBook)
        
    })
}

const editUpdateBook = (book) => {
    setBookToUpdate(book);
    console.log(book);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}

useEffect(() => {
    fetchBooklist();
}, [])

    return ( 
        <Container className="themed-container containerBooklistHome" fluid="lg" >
            
            <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }} style={{color: 'olive'}}
          >
            <h4>My library</h4>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }} style={{color: 'olive'}}
          >
            <h4>Create Booklist entry</h4>
            
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>

          <Col md='10' style={{color: 'black', padding: '20px', margin: '10px'}}>
            <h4>ADD IN BOOKISH QUOTE</h4>
          </Col>

        <Col md='3'>
                <Button color="success"  className="buttonAllBooks" onClick={() => {
                 setFetchUrl(`http://localhost:3000/booklist/myList`)}}>ADD IN BOOKISH QUOTE</Button>

                 </Col>

                 <br/>
                 <br/>
                 <Col>

                <Button color="success" className="buttonFinished" onClick={() => {
                 setFetchUrl(`http://localhost:3000/booklist/finished`)}}>Books I have Finished</Button>

                </Col>

                </Row>

                <Row>
                <Col sm='12'>
                    <BooklistList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchBooklist={fetchBooklist} token={props.token} />

                    </Col>


                </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="10">
              <Card body>
                <CardTitle></CardTitle>
                <CardText> 
                     <Col md='12'>
                    <BooklistCreate fetchBooklist={fetchBooklist} token={props.token} toggle={toggle} />
                   </Col>
                </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>

                {updateActive ? <BooklistUpdate bookToUpdate={bookToUpdate}
                updateOff={updateOff} token={props.token} fetchBooklist={fetchBooklist} /> : <></>} 

        </Container>
        
     );
}
 
export default BooklistHome;