import React from 'react';

const TodoEditItem = () => {
    return (
        <div>
            <input
                className="form-control mr-2"
                type="text"
                name="description"
                autoComplete="off"
            />
            <button
                className="btn btn-info"
            >
                Save
             </button>

        </div>
    )
}

export default TodoEditItem;
