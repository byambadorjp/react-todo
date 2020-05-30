import React from "react";
import Layout from './components/layout';
import Pass from './components/pass';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';
import { TodoProvider } from './provider/todo-provider';
import './main.css';

const App = () => {

    return (
        <TodoProvider>
            <Layout>
                <Pass>
                    <AddTodo />
                </Pass>
                <Pass>
                    <ListTodo />
                </Pass>
            </Layout>
        </TodoProvider>
    );
}

export default App;