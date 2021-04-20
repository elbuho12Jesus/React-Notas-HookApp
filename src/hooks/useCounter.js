import {useState} from 'react';


export const useCounter = (initialCounter=10) => {
    const [counter, setCounter] = useState(initialCounter);
    const increment=(factor=1)=>{
        return setCounter(counter+factor);
    }
    const decrement=(factor=1)=>{
        return setCounter(counter-factor);
    }
    const reset=()=>{
        return setCounter(initialCounter);
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
