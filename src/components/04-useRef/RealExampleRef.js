import React, { useState } from 'react';
import {MultipleCustomHook} from '../03-examples/MultipleCustomHook';
import './focusScreen.css';

export const RealExampleRef = () => {
    const [show, setshow] = useState(false);
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            {show && <MultipleCustomHook />}
            <button onClick={()=>{setshow(!show);}}>
                Show/Hide
            </button>            
        </div>
    )
}
