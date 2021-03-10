import React from 'react'


const TodoShowItem = ({ todo: { desc }, index }) => {

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
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default TodoShowItem;
