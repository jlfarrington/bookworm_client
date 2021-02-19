import React from 'react';
import Register from './Register';
import Login from './Login';

const Start = (props) => {
    return(
        <div>
            <Login props={props}/>
            <Register props={props}/>
        </div>
    )
}

export default Start;