import React from "react";
import TodoListComponentItem from "./TodoListComponentItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import { loadTodos } from "./thunks";


const TodoListComponent = ({todos=[],startTodos,isLoading}) => {
    //console.log(todos.length);
    useEffect(()=>{
     startTodos();
    }, [])
    let loadingPage = <div>Loading data...</div>
    //let content = <div>data loaded {todos.length}</div>
    let content =    <>
        <NewTodoForm todos={todos} />
       <ul>
        {
            todos.map(todo => {
                return (<TodoListComponentItem key={todo.text} todo={todo} todos={todos} />);
            })
        }
       </ul>
       </>
        
    return isLoading ? loadingPage : content;
};
const mapStateToProps = state => {
    return {todos: state.todos, isLoading: state.isLoading};
};
const mapDispatchToProps = dispatch => {
    return {
        startTodos: () => dispatch(loadTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);