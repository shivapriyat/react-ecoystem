import React from "react";
import TodoListComponentItem from "./TodoListComponentItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";


const TodoListComponent = ({todos}) => {
    //console.log(todos.length);
    
    return (
        <>
        <NewTodoForm todos={todos} />
       <ul>
        {
            todos.map(todo => {
                return (<TodoListComponentItem key={todo.text} todo={todo} todos={todos} />);
            })
        }
       </ul>
       </>
        
    );

};
const mapStateToProps = state => {
    return {todos: state.todos};
};

export default connect(mapStateToProps)(TodoListComponent);