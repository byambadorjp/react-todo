import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";


export const Task = (props) => {

    const { deleteTask } = useContext(TodoContext);

    return (
        <>
            <div className='task flex justify-between'>
                <div>{props.name}</div>
                <button onClick={() => deleteTask(props.name)}>X</button>
            </div>
        </>
    )
}