import React, { useContext } from 'react';
import Todo from '../components/todo';
import { TodoContext } from '../provider/todo-provider';

const ListTodo = () => {
    let { todo } = useContext(TodoContext);

    return (
        <ul>
            {todo.map((item) =>
                <Todo id={item.id} name={item.name} />
            )}
        </ul>
    )
}

export default ListTodo;