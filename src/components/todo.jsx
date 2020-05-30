import React, {useContext} from 'react';
import { TodoContext } from '../provider/todo-provider';

const Todo = (props) => {
    let { id, name } = props;
    let { deleteTodo } = useContext(TodoContext);

    return (

        <li>
            {name}
            <button onClick={() => {deleteTodo(id)}}>X</button>
        </li>
    )
}

export default Todo;