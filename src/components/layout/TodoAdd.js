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
                        <div className="col-lg-8 col-md-8 col-sm-12">
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
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block m-0"
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