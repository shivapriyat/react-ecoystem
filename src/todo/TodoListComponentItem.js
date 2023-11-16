import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTodo } from "./action";

const TodoListComponentItem = ({todo,todos,onRemoveClick,onMarkAsCompleted}) => {
    return (
        <div style={{ border: "1px solid black", margin: "1rem", padding: "8px" }}>
            <h3>{todo.text}</h3>
            <div style={{textAlign: "end"}}>
                {todo.isCompleted ? null : <button onClick={(e)=>onMarkAsCompleted(todo.text)} style={{backgroundColor: "green", margin: "1rem"}}>Mark as complete</button>}
                <button onClick={(e)=>onRemoveClick(todo.text)} style={{backgroundColor: "red", margin: "1rem"}}>Remove</button>
            </div>

        </div>
    );
}
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRemoveClick: text => dispatch(removeTodo(text)),
        onMarkAsCompleted: text=> dispatch(markAsCompleted(text))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListComponentItem);