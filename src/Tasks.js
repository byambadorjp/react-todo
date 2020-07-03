import React, { useContext } from "react";
import { Task } from './Task'
import { TodoContext } from "./TodoContextProvider";

export const Tasks = () => {

    const { tasks } = useContext(TodoContext);

    return (
        <>
            <div>
                {
                    tasks.map((item, index) =>
                        <Task key={index} name={item.name} />
                    )
                }
            </div>
        </>
    );
}