import React from 'react';
import {useCounter} from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state,increment,decrement,reset}=useCounter(100);
    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr />
            <button onClick={()=>{return increment(2);}} className="btn"> + 2 </button>
            <button onClick={()=>{return increment(1);}} className="btn"> + 1 </button>
            <button onClick={reset} className="btn"> Reset </button>
            <button onClick={()=>{return decrement(1);}} className="btn"> - 1 </button>
            <button onClick={()=>{return decrement(2);}} className="btn"> - 2 </button>
        </>
    )
}
