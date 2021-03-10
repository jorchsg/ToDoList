import React, { useContext } from 'react';
import useForm from '../../Hooks/useForm';
import { handleAddTodo } from '../actions/todoAction';
import { TodoContext } from '../todo/TodoContext';
import shortid from 'shortid';

const TodoAdd = () => {


    const { dispatch } = useContext(TodoContext)
    const [{ description }, handleInputChange, handleClearForm] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            document.querySelector('input').focus()
            return
        }

        const newTodo = {
            id: shortid.generate(),
            desc: description,
            done: false,
            isEdit: false
        }

        handleAddTodo(newTodo, dispatch)
        handleClearForm()
    }

    return (
        <>
            <h2>To Do List</h2>
            <div className="container mb-3">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Add a new task"
                                autoComplete="off"
                                value={description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="col-4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block mt-1"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default TodoAdd;
