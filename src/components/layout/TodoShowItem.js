import React, { useContext } from 'react';
import { TodoContext } from '../todo/TodoContext';
import { handleDelete } from '../actions/todoAction';



const TodoShowItem = ({ todo: { id, desc }, index }) => {

    const { dispatch } = useContext(TodoContext);

    return (
        <div>
            <p>
                {index + 1}. {desc}
            </p>

            <div>
                <button
                    className="btn btn-warning mr-2"
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(id, dispatch)}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default TodoShowItem;
