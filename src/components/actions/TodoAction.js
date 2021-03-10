export const handleAddTodo = (newTodo, dispatch) => {
    dispatch({
        type: 'add',
        payload: newTodo
    })
}