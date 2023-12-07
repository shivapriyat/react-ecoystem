export const CREATE_TODO="CREATE_TODO";
export const createTodo = (todo) => {
    return {
        type: CREATE_TODO,
        payload: {todo}
    }
}

export const REMOVE_TODO="REMOVE_TODO";
export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: {todo}
    }
}

export const MARK_AS_COMPLETED = "MARK_AS_COMPLETED";
export const markAsCompleted = todo => {
    return {
        type: MARK_AS_COMPLETED,
        payload: {
            todo
        }
    }
}

export const LOAD_TODOS_INPROGRESS = "LOAD_TODOS_INPROGRESS";
export const loadTodosInprogress = () => {
    return {
        type: LOAD_TODOS_INPROGRESS
    }
}

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const loadTodosSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: { todos }
    }
}

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => {
    return {
        type: LOAD_TODOS_FAILURE
    }
}