import React from "react";
import { connect } from "react-redux";
import { markAsCompleted, removeTodo } from "./action";
import { deleteTodoReq, displayAlert, markAsCompletedReq } from "./thunks";
import { getTodos } from "./selectors";
import styled from "styled-components";

const TodoListComponentItemContainer = styled.div`
border: 1px solid black;
 margin: 1rem;
  padding: 8px;
  
`;

const TodoListItemContainerPriority = styled(TodoListComponentItemContainer)`
border-bottom: ${props => new Date(props.createdAt) > new Date(Date.now())  - 8640000 * 5 ? "1px solid black": "2px solid red"}
`;


const TodoListItemButtonContainer = styled.div`
text-align: end;
`;

const Button = styled.button`
margin: 1rem;
`;
const CompletedButton = styled(Button)`
background-color: green;
`;
const RemoveButton = styled(Button)`
background-color: red;
`;
const TodoListComponentItem = ({todo,todos,onRemoveClick,onMarkAsCompleted}) => {
    const Container = todo.isCompleted ? TodoListComponentItemContainer : TodoListItemContainerPriority;
    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>{(new Date(todo.createdAt).toLocaleDateString())}</p>
            <TodoListItemButtonContainer>
                {todo.isCompleted ? null : <CompletedButton onClick={(e)=>onMarkAsCompleted(todo.id)} >Mark as complete</CompletedButton>}
                <RemoveButton onClick={(e)=>onRemoveClick(todo.id)} >Remove</RemoveButton>
            </TodoListItemButtonContainer>

        </Container>
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