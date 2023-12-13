import React from "react";
import TodoListComponentItem from "./TodoListComponentItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { useEffect } from "react";
import { loadTodos } from "./thunks";
import { getCompleteTodos, getIncompleteTodos, getTodos, getTodosLoading } from "./selectors";
import styled from "styled-components";

const BigRedText = styled.div`
    font-size: 18px;
    color: red;
`;

const TodoListComponent = ({todos=[],startTodos,isLoading,incompleteTodos,completeTodos}) => {
    //console.log(todos.length);
    useEffect(()=>{
     startTodos();
    }, [])
    let loadingPage = <div>Loading data...</div>
    //let content = <div>data loaded {todos.length}</div>
    let content =    <>
         <BigRedText>I am styled component.</BigRedText>
        <NewTodoForm todos={todos} />
        <h3>Incomplete Todos</h3>
       <ul>
        {
            incompleteTodos.map(todo => {
                return (<TodoListComponentItem key={todo.text} todo={todo} todos={todos} />);
            })
        }
       </ul>
       <h3>Complete Todos</h3>
       <ul>
        {
            completeTodos.map(todo => {
                return (<TodoListComponentItem key={todo.text} todo={todo} todos={todos} />);
            })
        }
       </ul>
       </>
        
    return isLoading ? loadingPage : content;
};
const mapStateToProps = state => {
    return {
        todos: getTodos(state), 
        incompleteTodos: getIncompleteTodos(state),
        completeTodos: getCompleteTodos(state),
        isLoading: getTodosLoading(state)
    };
};
const mapDispatchToProps = dispatch => {
    return {
        startTodos: () => dispatch(loadTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListComponent);