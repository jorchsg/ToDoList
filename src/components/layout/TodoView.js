import React from 'react';
import '../../index.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const TodoView = () => {
    return (

        <>
            <div className="mt-5">
                <h1>LKMX - Front-End</h1>
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
