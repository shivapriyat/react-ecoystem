import React, { useState } from "react";
import TodoListComponent from "./todo/TodoListComponent";
const App = () => {
    let dummyTodos = [
        {text: "complete assignment", isCompleted: false},
        {text: "buy grocery", isCompleted: false}
    ]

    let [todos,setTodos] = useState(dummyTodos);
    return(
        <div className="App">
            <h1>Hello world</h1>
            <TodoListComponent todos={todos} setTodos={setTodos}/>
        </div>
    )
}
export default App;