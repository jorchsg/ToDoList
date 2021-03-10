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