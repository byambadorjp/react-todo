import React, {useState} from "react";
import { AddTask } from './AddTask';
import { Tasks } from "./Tasks";
import './main.scss';
import { TodoContextProvider } from "./TodoContextProvider";

const App = () => {
    // const [tasks, setTasks] = useState([
    //     { name: 'Get up early' },
    //     { name: 'Have a breakfast' },
    //     { name: 'Go to work' },
    // ]);

    // const createTask = (name) => {
    //     setTasks([...tasks, {name}])
    // }

    // const deleteTask = (name) => {
    //     // ....
    // }

    return (
        <TodoContextProvider>
            <h1>TODO APPLICATION</h1>
            <AddTask />
            <Tasks />
        </TodoContextProvider>
    );
}

export default App;