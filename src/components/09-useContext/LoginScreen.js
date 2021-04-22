import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setuser}=useContext(UserContext);
    const user={id: 123,name: 'Jesus Miguel Adrian Matos'};
    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={()=>{
                    setuser(user);
                }}
            >
                login
            </button>
        </div>
    )
}
