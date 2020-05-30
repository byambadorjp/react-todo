import React, { useState, useContext } from 'react';
import { TodoContext } from '../provider/todo-provider';


const AddTodo = () => {
    let { addTodo } = useContext(TodoContext);
    const [name, setName] = useState('');

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input value={name} onChange={({target}) => setName(target.value)}/>
            <button onClick = {() => {
                addTodo(name)
            }}> add todo </button>
        </div>
    )
}

export default AddTodo;