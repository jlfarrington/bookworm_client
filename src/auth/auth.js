import { useState } from 'react';
import Signup from './Signup'
import Login from './Login'

const Auth = (props) => {
    const [toggle, setToggle] = useState(false)
    

    return(
        <div className="card-login" id="cardls">
            {(toggle) ? <Login updateToken={props.updateToken}/> : <Signup updateToken={props.updateToken}/>}
           
                <br />
            <p className="link" onClick={() => setToggle(!toggle)}>{(toggle) ? 'I Do Not Have An Account. Signup Here' : 'I Have An Account. Login Here.'}</p>
        </div>
    )
}

export default Auth;