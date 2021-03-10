export const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter((todo) => todo.id !== action.payload)

        case 'edit':
            return state.map((todo) =>
                todo.id === action.payload ? { ...todo, isEdit: !todo.isEdit } : todo
            )

        case 'update':
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? {
                        ...todo,
                        desc: action.payload.desc,
                        isEdit: !todo.isEdit
                    }
                    : todo
            )

        default:
            return state

    }
}
