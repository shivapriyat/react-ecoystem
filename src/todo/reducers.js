import { CREATE_TODO, LOAD_TODOS_FAILURE, LOAD_TODOS_INPROGRESS, LOAD_TODOS_SUCCESS, MARK_AS_COMPLETED, REMOVE_TODO } from "./action";
/*iniitally there were 2 separate state objects isLoading and todos[...]
changing the format to below
todos = {
    isLoading: true/false
    data: [ {}, {}...]
}

*/
const initialState = {
    isLoading: false,
    data: []
}
export const todos = (state=initialState,action) => {
    const {type,payload} = action;

    switch(type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo)
            } 
        }
        case REMOVE_TODO: {
            const { todo: deletedTodo } = payload;
            return {
                ...state,
               data: state.data.filter(todo => todo.id !== deletedTodo.id)
            }
        }
        case MARK_AS_COMPLETED: {
            const {todo : updatedTodo} = payload;
            return {
                ...state,
                data:  state.data.map(todo => {
                    if(todo.id === updatedTodo.id) {
                        //return {...todo, isCompleted:true};
                        todo.isCompleted=true;
                    }
                    return todo;
                })
            } 
        }
        
        case LOAD_TODOS_SUCCESS: {
            const {todos} = payload;
            return {
                ...state,
                isLoading: false,
                data: todos
            }
        };
        case LOAD_TODOS_INPROGRESS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case LOAD_TODOS_FAILURE: {
            return {
                ...state,
                isLoading: false
            }
        }
        default: return state;
}
}