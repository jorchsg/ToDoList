import React, { useContext } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { TodoContext } from '../todo/TodoContext';

import '../../index.css';

const TodoView = () => {

    const { todos } = useContext(TodoContext);

    return (

        <>
            <div className="mt-5">
                <h1>LKMX - Front-End -  Tasks ({todos.lenght})</h1>
            </div>

            <div className="container bg-white p-3">

                <div className="row mt-3">
                    <div className="col-12">
                        <TodoAdd />
                    </div>

                    <div className="col-12">
                        <TodoList />
                    </div>

                </div>

            </div>
        </>
    )
}

export default TodoView;
