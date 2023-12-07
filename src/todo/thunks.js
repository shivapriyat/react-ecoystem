import { createTodo, loadTodosFailure, loadTodosInprogress, loadTodosSuccess, markAsCompleted, removeTodo } from "./action"

export const loadTodos = (todos) => async(dispatch, getState) => {
    try {
        console.log("thunks starting ");
        dispatch(loadTodosInprogress());
        const response = await fetch("http://localhost:8080/todos");
        const todos = await response.json();
        console.log("thunks+ "+ todos);
        dispatch(loadTodosSuccess(todos));
    }
    catch(e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addNewTodoReq = (text) => async(dispatch,getState)=> {
try {
    const response = await fetch("http://localhost:8080/todos", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify({text})
    });
    const newTodo = await response.json();
    dispatch(createTodo(newTodo));
} catch (error) {
    dispatch(displayAlert(error));
}
}

export const deleteTodoReq = (id) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: "delete"
        });
        const deletedTodo = await response.json();
        dispatch(removeTodo(deletedTodo));
        
    } catch(e) {
        dispatch(displayAlert(e))
    }
}
 
export const markAsCompletedReq = (id) => async(dispatch, getState) => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: "post"
        });
        const updatedTodo = await response.json();
        dispatch(markAsCompleted(updatedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
}
export const displayAlert = (text) => ()=> {
    alert(`${text}` )
}