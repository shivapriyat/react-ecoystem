import React, { useState } from "react";

const NewTodoForm = ({ todos,setTodos }) => {
    const [inputValue, setInputValue] = useState('');
    function handleNewTodo(inputValue,todos,setTodos) {
        let newTodo = {
            text: inputValue,
            isCompleted: false
        }
        setTodos([...todos, newTodo]);
    }
    return (
        <div style={{ border: "1px solid black", margin: "1rem", padding: "24px", marginLeft: "3.6rem" }}>
            <input type="text" style={{ width: "50%" }} value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="enter new todo item" />
            <div style={{ textAlign: "end" }}>
                <button onClick={() => handleNewTodo(inputValue,todos,setTodos)} style={{ backgroundColor: "green", margin: "1rem" }} type="submit">Add new todo</button>
            </div>
        </div>
    );
}

export default NewTodoForm;