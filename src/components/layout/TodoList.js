import React, { useContext } from 'react';
import { TodoContext } from '../todo/TodoContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const { todos } = useContext(TodoContext);

    return (
        <>
            <h2>Tasks ({todos.length})</h2>
            {
                todos.length === 0 ? (
                    <li className="list-group-item">Not Tasks Yet, Add New One</li>
                ) : (
                    <ul className="list-group-item list-group-flush bg-light">
                        {todos.map((todo, index) => (
                            <TodoListItem key={todo.id} todo={todo} index={index} />
                        ))}
                    </ul>
                )
            }

        </>
    )
}

export default TodoList;
