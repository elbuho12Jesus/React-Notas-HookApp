import React, { useState,useCallback } from 'react';
import { Showincrement } from './Showincrement';
import './memorize.css';

export const CallbackHook = () => {
    const [counter, setcounter] = useState(1);
    const increment=useCallback(
        (num) => {
            setcounter(c=>c+num);
        },
        [setcounter]
    )

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <Showincrement increment={increment} />
        </div>
    )
}
