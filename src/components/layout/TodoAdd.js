import React from 'react'

const TodoAdd = () => {
    return (
        <>
            <h2>To Do List</h2>
            <div className="container mb-3">
                <form>
                    <div className="row">
                        <div className="col-8">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Add a new task"
                                autoComplete="off"
                            />
                        </div>
                        <div className="col-4">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block mt-1"
                            >
                                Agregar
                        </button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}

export default TodoAdd;
