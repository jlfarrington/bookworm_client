import React, { useState, useEffect } from 'react';
import Start from './start/Start';
import Navbar from './home/Navbar';
import BooklistHome from './booklist/BooklistHome';
import Auth from './auth/Auth.js';

const App = () => {
    const [sessionToken, setSessionToken] = useState('');
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
        }
      }, []);
      
      const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(newToken);
      }

return(
    <div>
        <Start updateToken={updateToken}/>
        <BooklistHome token={sessionToken}/>
        <Navbar/>
        <Auth/>
    </div>
);
}

export default App;