import { useState } from 'react';
import Signup from './Signup'
import Login from './Login'
const Auth = () => {
    const [toggle, setToggle] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className="card" id="cardls">
            {(toggle) ? <Login 
            setPassword={setPassword} 
            setUsername={setUsername} 
            username={username} 
            password={password} /> : <Signup 
            setPassword={setPassword} 
            setUsername={setUsername} 
            username={username} 
            password={password}/>}
           
                <br />
            <p className="link" onClick={() => setToggle(!toggle)}>{(toggle) ? 'I Do Not Have An Account. Signup Here' : 'I Have An Account. Login Here.'}</p>
        </div>
    )
}

export default Auth;