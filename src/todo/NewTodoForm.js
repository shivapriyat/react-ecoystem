import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./action";
import { addNewTodoReq } from "./thunks";
import { getTodos } from "./selectors";
import styled from "styled-components";

const NewTodoFormContainer = styled.div`
border: 1px solid black;
margin: 1rem;
padding: 24px;
margin-left: 3.6rem;
`;

const ButtonContainer = styled.div`
text-align: end;
`;

const NewTodoFormButton = styled.button`
background-color: green;
 margin: 1rem;
`;

const NewTodoFormInput = styled.input`
width: 50%;
`;

const NewTodoForm = ({ todos,onCreateToDoPressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <NewTodoFormContainer>
            <NewTodoFormInput type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="enter new todo item" />
            <ButtonContainer>
                <NewTodoFormButton onClick={() => onCreateToDoPressed(inputValue)}  type="submit">Add new todo</NewTodoFormButton>
            </ButtonContainer>
        </NewTodoFormContainer>
    );
}
const mapStateToProps = state => {  
    return {todos: getTodos(state)}
};
const mapDispatchToProps = dispatch => {
    return {onCreateToDoPressed: (text)=>dispatch(addNewTodoReq(text))};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);