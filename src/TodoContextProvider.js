import React, { useState, createContext } from 'react';

export const TodoContext = createContext({
    task: [],
    createTask: () => {},
    deleteTask: () => {}
});

export const TodoContextProvider = ({children}) => {
    const [tasks,setTasks] = useState([{name: 'test'}, {name: 'task2'}])

    const createTask = (name) => {
        setTasks([...tasks, {name}])
    }
    const deleteTask = (name) => {
        setTasks(tasks.filter((task) => task.name !== name))
    };

    return (
        <TodoContext.Provider value = {{tasks, createTask, deleteTask}}>
            {children}
        </TodoContext.Provider>
    )
}
