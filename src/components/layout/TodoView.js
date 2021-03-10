import React from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

import '../../index.css';

const TodoView = () => {

    return (

        <>
            <div className="container mt-5 mb-5">
                <h1>LKMX - Front-end</h1>
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
