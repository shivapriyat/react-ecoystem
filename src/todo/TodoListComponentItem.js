import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTodo } from "./action";
import { deleteTodoReq, displayAlert, markAsCompletedReq } from "./thunks";
import { getTodos } from "./selectors";

const TodoListComponentItem = ({todo,todos,onRemoveClick,onMarkAsCompleted}) => {
    return (
        <div style={{ border: "1px solid black", margin: "1rem", padding: "8px" }}>
            <h3>{todo.text}</h3>
            <div style={{textAlign: "end"}}>
                {todo.isCompleted ? null : <button onClick={(e)=>onMarkAsCompleted(todo.id)} style={{backgroundColor: "green", margin: "1rem"}}>Mark as complete</button>}
                <button onClick={(e)=>onRemoveClick(todo.id)} style={{backgroundColor: "red", margin: "1rem"}}>Remove</button>
            </div>

        </div>
    );
}
const mapStateToProps = state => {
    return {
        todos: getTodos(state)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onRemoveClick: id => dispatch(deleteTodoReq(id)),
        onMarkAsCompleted: id=> dispatch(markAsCompletedReq(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListComponentItem);