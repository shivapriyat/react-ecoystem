import React from "react";

const TodoListComponentItem = ({todo,todos,setTodos}) => {
    function handleMarkComplete(completedTodo,todos,setTodos) {        
        todos.map(todo => todo.text === completedTodo.text ? todo.isCompleted=true :"");
        console.log(todos);
        setTodos([...todos]);
    }
    function handleRemoveTodo(deletedTodo,todos,setTodos) {
        let updatedTodos = todos.filter(todo => todo.text !== deletedTodo.text );
        setTodos([...updatedTodos]);
    }

    return (
        <div style={{ border: "1px solid black", margin: "1rem", padding: "8px" }}>
            <h3>{todo.text}</h3>
            <div style={{textAlign: "end"}}>
                {todo.isCompleted ? null : <button onClick={(e)=>handleMarkComplete(todo,todos,setTodos)} style={{backgroundColor: "green", margin: "1rem"}}>Mark as complete</button>}
                <button onClick={(e)=>handleRemoveTodo(todo,todos,setTodos)} style={{backgroundColor: "red", margin: "1rem"}}>Remove</button>
            </div>

        </div>
    );
}
export default TodoListComponentItem;