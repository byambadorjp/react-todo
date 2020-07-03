import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext({
    task: [],
    createTask: () => {},
    deleteTask: () => {}
});

export const TodoContextProvider = ({children}) => {
    const [tasks,setTasks] = useState([])

    const createTask = (name) => {
        setTasks([...tasks, {id: uuidv4(), name}])
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };

    return (
        <TodoContext.Provider value = {{tasks, createTask, deleteTask}}>
            {children}
        </TodoContext.Provider>
    )
}
