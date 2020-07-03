import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";


export const Task = ({id, name}) => {

    const { deleteTask } = useContext(TodoContext);

    return (
        <>
            <div className='task flex justify-between'>
                <div>{name}</div>
                <button onClick={() => deleteTask(id)}>X</button>
            </div>
        </>
    )
}