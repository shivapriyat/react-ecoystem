import { createSelector } from "reselect";
import { todos } from "./reducers";

export const getTodos = state => {
    return state.todos.data ? state.todos.data : [];
}

export const getTodosLoading = state => {
    return state.todos.isLoading;
}

export const getIncompleteTodos = createSelector(
    getTodos,
    getTodosLoading,
    (todos, isLoading) => {
        return isLoading ?  [] :  todos.filter(todo => !todo.isCompleted)
    }
)

export const getCompleteTodos = createSelector(
    getTodos,
    (todos) => {
    return todos.filter(todo => todo.isCompleted);
    }
)