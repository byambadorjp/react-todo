import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContextProvider";

export const AddTask = (props) => {
    const { createTask } = useContext(TodoContext);
    const [val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    const createNewTask = () => {
        createTask(val)
        setVal('')
    }

    return (
        <>
            <input value={val} onChange={handleChange}/>
            <button onClick={createNewTask}>ADDTASK</button>
        </>
    );
}