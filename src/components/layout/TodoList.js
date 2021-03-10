import React, { useContext } from 'react';
import { TodoContext } from '../todo/TodoContext';
import TodoListItem from './TodoListItem';

const TodoList = () => {

    const { todos } = useContext(TodoContext)
    console.log(todos);

    return (
        <>
            <h2>Todo List Items</h2>
            <ul className="list-group-item list-group-flush bg-light">
                {todos.map((todo, index) => (
                    <TodoListItem key={todo.id} todo={todo} index={index} />
                ))}
            </ul>
        </>
    )
}

export default TodoList;
