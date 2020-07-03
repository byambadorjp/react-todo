import React, {useState} from "react";
import { AddTask } from './AddTask';
import { Tasks } from "./Tasks";
import './main.scss';

const App = () => {
    const [tasks, setTasks] = useState([
        { name: 'Get up early' },
        { name: 'Have a breakfast' },
        { name: 'Go to work' },
    ]);

    const createTask = (name) => {
        setTasks([...tasks, {name}])
    }

    const deleteTask = (name) => {
        // ....
    }

    return (
        <>
            <h1>TODO APPLICATION</h1>
            <AddTask createTask={createTask} />
            <Tasks tasks={tasks} deleteTask={deleteTask}/>
        </>
    );
}

export default App;