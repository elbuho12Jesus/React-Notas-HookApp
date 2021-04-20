import React, { useState } from 'react';
import {useCounter} from '../../hooks/useCounter';
import './memorize.css';
import { Small } from './Small';

export const Memorize = () => {
    const {counter,increment}=useCounter(1);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>{return increment(1);}}>
                +1
            </button>
            <button
                className="btn btn-outline-primary ml-3"
                onClick={
                    ()=>{
                        setShow(!show);
                    }
                }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
