import { CREATE_TODO, LOAD_TODOS_FAILURE, LOAD_TODOS_INPROGRESS, LOAD_TODOS_SUCCESS, MARK_AS_COMPLETED, REMOVE_TODO } from "./action";

export const isLoading = (state=false, action) => {
    const {type} = action;
    switch(type) {
        case LOAD_TODOS_INPROGRESS: return true;
        case LOAD_TODOS_FAILURE: return false;
        case LOAD_TODOS_SUCCESS: return false;
        default: return state;
    }

}
export const todos = (state=[{text:"say hi", isCompleted: false}],action) => {
    const {type,payload} = action;

    switch(type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const { todo: deletedTodo } = payload;
            return state.filter(todo => todo.id !== deletedTodo.id);
        }
        case MARK_AS_COMPLETED: {
            const {todo : updatedTodo} = payload;
            let updatedState = state.map(todo => {
                if(todo.id === updatedTodo.id) {
                    //return {...todo, isCompleted:true};
                    todo.isCompleted=true;
                }
                return todo;
            });
            return updatedState;
        }
        
        case LOAD_TODOS_SUCCESS: {
            const {todos} = payload;
            return todos ? todos : [];
        };
        default: return state;
}
}