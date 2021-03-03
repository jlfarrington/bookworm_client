import React from 'react';
import {Button} from 'reactstrap';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from 'react-router-dom';


const LearnMore = () => {
    

    return ( 
        <div className="LearnMore"> 
        
        <Button outline color="success" style={{padding: '20px', margin: '15px', backgroundColor: 'white', opacity: '0.25'}}>
        <Link to='/' style={{color: 'green'}}><h5>Back to Library!</h5></Link>
        </Button>

        <div className="transbox">
            <h3 style={{color: 'green', fontWeight: 'bold'}}>Open A Book.<br />
            <br />
                              ADD BOOKISH QUOTE
                </h3>
                <i style={{color: 'green'}}>Let's Read</i>
                         
        </div>
        </div>
     );
}
 
export default LearnMore;