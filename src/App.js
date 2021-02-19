import React, { useState, useEffect } from 'react';
import Start from './start/Start';
import BooklistHome from './booklist/BooklistHome'

const App = () => {
    const [sessionToken, setSessionToken] = useState('');
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'))
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

    </div>
)
}

export default App;