import React from 'react';
import TodoEditItem from './TodoEditItem';
import TodoShowItem from './TodoShowItem';

const TodoListItem = ({ todo, index }) => {

    return (
        <li className="list-group-item" key={todo.id}>
            {todo.isEdit ? (
                <TodoEditItem todo={todo} index={index} />
            ) : (
                <TodoShowItem todo={todo} index={index} />
            )}

        </li>
    )
}

export default TodoListItem;
