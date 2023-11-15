import React from "react";
import TodoListComponentItem from "./TodoListComponentItem";
import NewTodoForm from "./NewTodoForm";


const TodoListComponent = ({todos,setTodos}) => {
    //console.log(todos.length);
    
    return (
        <>
        <NewTodoForm todos={todos} setTodos={setTodos} />
       <ul>
        {
            todos.map(todo => {
                return (<TodoListComponentItem key={todo.text} todo={todo} todos={todos} setTodos={setTodos}   />);
            })
        }
       </ul>
       </>
        
    );
};
//
export default TodoListComponent;