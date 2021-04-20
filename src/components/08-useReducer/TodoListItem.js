import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({index,todo,handleDelete,handleToggle}) => {
    return (
        <li            
            className="list-group-item"
        >
            <p 
                className={`${ todo.done && 'complete'}`}
                onClick={()=>{handleToggle(todo.id)}}
            >
                {index+1}. {todo.desc}
            </p> 
            <button
                className="btn btn-danger"
                onClick={()=>{handleDelete(todo.id);}}
            >
                Borrar
            </button>                                   
        </li>
    )
}

TodoListItem.propTyper={
    index: PropTypes.number.isRequired,
    todo: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}