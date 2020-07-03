import React, { useState } from "react";

export const AddTask = (props) => {
    const [val, setVal] = useState('');

    const handleChange = (e) => {
        setVal(e.target.value);
    }

    const createNewTask = () => {
        props.createTask(val)
        setVal('')
    }

    return (
        <>
            <input value={val} onChange={handleChange}/>
            <button onClick={createNewTask}>ADDTASK</button>
        </>
    );
}