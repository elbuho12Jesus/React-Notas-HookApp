import React,{memo} from 'react';

export const Showincrement = memo(({increment}) => {
    console.log('hey body..');
    return (
        <button
            className="btn btn-primary"
            onClick={
                ()=>{
                    increment(5);
                }
            }
        >
            Increment
        </button>
    )
});
