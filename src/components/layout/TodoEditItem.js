import React, { useContext } from 'react';
import useForm from '../../Hooks/useForm';
import { handleUpdate } from '../actions/todoAction';
import { TodoContext } from '../todo/TodoContext';

const TodoEditItem = ({ todo }) => {

    const [{ description }, handleInputChange] = useForm({
        description: todo.desc
    })
    const { dispatch } = useContext(TodoContext)
    const data = {
        id: todo.id,
        desc: description
    }

    return (
        <div>
            <input
                className="form-control mr-2"
                type="text"
                name="description"
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />
            <button
                onClick={() => handleUpdate(data, dispatch)}
                className="btn btn-info"
            >
                Save
             </button>
        </div>
    )
}

export default TodoEditItem;
