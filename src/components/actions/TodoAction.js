export const handleAddTodo = (newTodo, dispatch) => {
    dispatch({
        type: 'add',
        payload: newTodo
    })
}

export const handleDelete = (todoId, dispatch) => {
    dispatch({
        type: 'delete',
        payload: todoId
    })
}

export const handleEdit = (todoId, dispatch) => {
    dispatch({
        type: 'edit',
        payload: todoId
    })
}

export const handleUpdate = (data, dispatch) => {
    dispatch({
        type: 'update',
        payload: data
    })
}