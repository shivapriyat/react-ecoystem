import { CREATE_TODO, MARK_AS_COMPLETED, REMOVE_TODO } from "./action";

export const todos = (state=[{text:"say hi", isCompleted: false}],action) => {
    const {type,payload} = action;

    switch(type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text, isCompleted: false
            };
            if (!(state.some(item => item.text === text))) {
                return state.concat(newTodo);
            }
            else { return state; }
        }
        case REMOVE_TODO: {
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        case MARK_AS_COMPLETED: {
            const {text} = payload;
            let updatedState = state.map(todo => {
                if(todo.text === text) {
                    //return {...todo, isCompleted:true};
                    todo.isCompleted=true;
                }
                return todo;
            });
            return updatedState;
        }
        default: return state;
}
}