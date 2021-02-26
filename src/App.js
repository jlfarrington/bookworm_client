import React, { useState, useEffect } from 'react';

import Navbar from './home/Navbar';
import Auth from './auth/auth'
import './App.css';

import BooklistHome from './booklist/BooklistHome'


const App = () => {
    const [sessionToken, setSessionToken] = useState('');
    const [id, setId] = useState(0)
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
        }
      }, []);
      
      useEffect(() => {
        if (localStorage.getItem('id')) {
          setId(localStorage.getItem('id'));
        }
      }, []);
      
      const updateToken = (newToken, newId) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('id', newId);
        setSessionToken(newToken);
        setId(newId)
        console.log(newToken);
        console.log(newId)
      }
      const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
      }
      const protectedViews = () => {
        return (sessionToken === localStorage.getItem("token") ? <BooklistHome token={sessionToken} id={id}/> : <Auth updateToken={updateToken}/>)
      }

return(
    <div> 
        <Navbar clickLogout={clearToken}/>
        {protectedViews()}
    </div>
);
}

export default App;