import React, { useRef } from 'react';
import './focusScreen.css';

export const FocusScreen = () => {
    const inputRef=useRef();
    const handleClick=()=>{
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                placeholder="Su Nombre"
            />
            <button onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
