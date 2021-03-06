import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button, TabContent, TabPane, Nav,NavItem, NavLink, Card, CardTitle, CardText} from 'reactstrap';
import BookList from './BooklistList';
import BooklistUpdate from './BooklistUpdate';
import classnames from 'classnames';
import '../App.css';
import BooklistCreate from './BooklistCreate';


const BooklistHome = (props) => {

const [library, setBooklist] = useState([]);
const [updateActive, setUpdateActive] = useState(false);
const [bookToUpdate, setBookToUpdate] = useState({});
const [fetchUrl, setFetchUrl] = useState(`http://localhost:3000/bookworm/mylist`);
const [toggleView, setToggleView] = useState(true);
const [activeTab, setActiveTab] = useState('1');
const [finishedToggle, setFinishedToggle] = useState(true);
const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

useEffect(() => {
    fetchBooklist () 
}, [fetchUrl]);

const fetchBooklist = () => {
  fetch(fetchUrl, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': props.token
    })
  }).then((res) => res.json())
  .then((logBook) => setBooklist(logBook))
}


const editUpdateBook = (book) => {
    setBookToUpdate(book);
}

const updateOn = () => {
    setUpdateActive(true);
}

const updateOff = () => {
    setUpdateActive(false);
}


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
            <div className="quote">
            <h4>A reader lives a thousand lives before he dies.</h4>
            <h1>George R.R. Martin</h1>
            </div>
          </Col>

        <Col md='3'>
                <Button color="success"  className="buttonAllBooks" onClick={() => {setToggleView(!toggleView); setFinishedToggle(!finishedToggle);
                  (toggleView) ? setFetchUrl(`http://localhost:3000/bookworm/booklist`) : setFetchUrl(`http://localhost:3000/bookworm/mylist`)}}>{(toggleView) ? 'Look at All User Books' : 'Go Back to My Library'}</Button>

                 </Col>

                 <br/>
                 <br/>
                 <Col>
              
                {(finishedToggle) ? <Button color="success" className="buttonFinished" onClick={() => {
                 setFetchUrl(`http://localhost:3000/bookworm/finished`); setFinishedToggle(!finishedToggle); setToggleView(!toggleView);}}>Books I have Finished</Button> : <div></div>}
                </Col>

                </Row>

                <Row>
                <Col sm='12'>
                    <BookList library={library} editUpdateBook={editUpdateBook} updateOn={updateOn} fetchBooklist={fetchBooklist} token={props.token} id={props.id} />

                    </Col>


                </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md="10">
              <Card body>
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