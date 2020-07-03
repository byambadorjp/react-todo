import React, { useContext } from "react";
import { Task } from './Task'
import { TodoContext } from "./TodoContextProvider";

export const Tasks = () => {

    const { tasks } = useContext(TodoContext);
    console.log(tasks);

    return (
        <>
            <div>
                {
                    tasks.map((item) =>
                        <Task key={item.id} id={item.id} name={item.name} />
                    )
                }
            </div>
        </>
    );
}