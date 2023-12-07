import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./action";
import { addNewTodoReq } from "./thunks";
import { getTodos } from "./selectors";

const NewTodoForm = ({ todos,onCreateToDoPressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div style={{ border: "1px solid black", margin: "1rem", padding: "24px", marginLeft: "3.6rem" }}>
            <input type="text" style={{ width: "50%" }} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="enter new todo item" />
            <div style={{ textAlign: "end" }}>
                <button onClick={() => onCreateToDoPressed(inputValue)} style={{ backgroundColor: "green", margin: "1rem" }} type="submit">Add new todo</button>
            </div>
        </div>
    );
}
const mapStateToProps = state => {  
    return {todos: getTodos(state)}
};
const mapDispatchToProps = dispatch => {
    return {onCreateToDoPressed: (text)=>dispatch(addNewTodoReq(text))};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);